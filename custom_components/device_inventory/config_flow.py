"""Config flow: nothing to configure, one click. Option: an AI task entity that finds manuals."""

from __future__ import annotations

import voluptuous as vol

from homeassistant.config_entries import ConfigEntry, ConfigFlow, ConfigFlowResult, OptionsFlow
from homeassistant.core import callback
from homeassistant.helpers import selector

from .const import CONF_AI_TASK, DOMAIN


class DeviceInventoryConfigFlow(ConfigFlow, domain=DOMAIN):
    """Single-step flow."""

    VERSION = 1

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: ConfigEntry) -> OptionsFlow:
        return DeviceInventoryOptionsFlow()

    async def async_step_user(self, user_input=None) -> ConfigFlowResult:
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if user_input is not None:
            return self.async_create_entry(title="Device Inventory", data={})
        return self.async_show_form(step_id="user")


class DeviceInventoryOptionsFlow(OptionsFlow):
    """Options: the AI task entity used to find manuals (optional, nothing is sent without it)."""

    async def async_step_init(self, user_input=None) -> ConfigFlowResult:
        if user_input is not None:
            return self.async_create_entry(data=user_input)
        schema = vol.Schema({vol.Optional(CONF_AI_TASK): selector.EntitySelector(selector.EntitySelectorConfig(domain="ai_task"))})
        return self.async_show_form(step_id="init", data_schema=self.add_suggested_values_to_schema(schema, self.config_entry.options))
