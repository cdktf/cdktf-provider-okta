# `okta_authenticator`

Refer to the Terraform Registory for docs: [`okta_authenticator`](https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator).

# `authenticator` Submodule <a name="`authenticator` Submodule" id="@cdktf/provider-okta.authenticator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Authenticator <a name="Authenticator" id="@cdktf/provider-okta.authenticator.Authenticator"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator okta_authenticator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import authenticator

authenticator.Authenticator(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  name: str,
  id: str = None,
  provider_auth_port: typing.Union[int, float] = None,
  provider_host: str = None,
  provider_hostname: str = None,
  provider_integration_key: str = None,
  provider_json: str = None,
  provider_secret_key: str = None,
  provider_shared_secret: str = None,
  provider_user_name_template: str = None,
  settings: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.key">key</a></code> | <code>str</code> | A human-readable string that identifies the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.name">name</a></code> | <code>str</code> | Display name of the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#id Authenticator#id}. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerAuthPort">provider_auth_port</a></code> | <code>typing.Union[int, float]</code> | The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHost">provider_host</a></code> | <code>str</code> | The Duo Security API hostname. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHostname">provider_hostname</a></code> | <code>str</code> | Server host name or IP address. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerIntegrationKey">provider_integration_key</a></code> | <code>str</code> | The Duo Security integration key. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerJson">provider_json</a></code> | <code>str</code> | Provider in JSON format. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSecretKey">provider_secret_key</a></code> | <code>str</code> | The Duo Security secret key. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSharedSecret">provider_shared_secret</a></code> | <code>str</code> | An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerUserNameTemplate">provider_user_name_template</a></code> | <code>str</code> | Format expected by the provider. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.settings">settings</a></code> | <code>str</code> | Authenticator settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.status">status</a></code> | <code>str</code> | Authenticator status: ACTIVE or INACTIVE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.key"></a>

- *Type:* str

A human-readable string that identifies the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#key Authenticator#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.name"></a>

- *Type:* str

Display name of the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#name Authenticator#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#id Authenticator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_auth_port`<sup>Optional</sup> <a name="provider_auth_port" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerAuthPort"></a>

- *Type:* typing.Union[int, float]

The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_auth_port Authenticator#provider_auth_port}

---

##### `provider_host`<sup>Optional</sup> <a name="provider_host" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHost"></a>

- *Type:* str

The Duo Security API hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_host Authenticator#provider_host}

---

##### `provider_hostname`<sup>Optional</sup> <a name="provider_hostname" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerHostname"></a>

- *Type:* str

Server host name or IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_hostname Authenticator#provider_hostname}

---

##### `provider_integration_key`<sup>Optional</sup> <a name="provider_integration_key" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerIntegrationKey"></a>

- *Type:* str

The Duo Security integration key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_integration_key Authenticator#provider_integration_key}

---

##### `provider_json`<sup>Optional</sup> <a name="provider_json" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerJson"></a>

- *Type:* str

Provider in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_json Authenticator#provider_json}

---

##### `provider_secret_key`<sup>Optional</sup> <a name="provider_secret_key" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSecretKey"></a>

- *Type:* str

The Duo Security secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_secret_key Authenticator#provider_secret_key}

---

##### `provider_shared_secret`<sup>Optional</sup> <a name="provider_shared_secret" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerSharedSecret"></a>

- *Type:* str

An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_shared_secret Authenticator#provider_shared_secret}

---

##### `provider_user_name_template`<sup>Optional</sup> <a name="provider_user_name_template" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.providerUserNameTemplate"></a>

- *Type:* str

Format expected by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_user_name_template Authenticator#provider_user_name_template}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.settings"></a>

- *Type:* str

Authenticator settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#settings Authenticator#settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.status"></a>

- *Type:* str

Authenticator status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#status Authenticator#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort">reset_provider_auth_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost">reset_provider_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname">reset_provider_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey">reset_provider_integration_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson">reset_provider_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey">reset_provider_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret">reset_provider_shared_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate">reset_provider_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authenticator.Authenticator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authenticator.Authenticator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authenticator.Authenticator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authenticator.Authenticator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_provider_auth_port` <a name="reset_provider_auth_port" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort"></a>

```python
def reset_provider_auth_port() -> None
```

##### `reset_provider_host` <a name="reset_provider_host" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost"></a>

```python
def reset_provider_host() -> None
```

##### `reset_provider_hostname` <a name="reset_provider_hostname" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname"></a>

```python
def reset_provider_hostname() -> None
```

##### `reset_provider_integration_key` <a name="reset_provider_integration_key" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey"></a>

```python
def reset_provider_integration_key() -> None
```

##### `reset_provider_json` <a name="reset_provider_json" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson"></a>

```python
def reset_provider_json() -> None
```

##### `reset_provider_secret_key` <a name="reset_provider_secret_key" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey"></a>

```python
def reset_provider_secret_key() -> None
```

##### `reset_provider_shared_secret` <a name="reset_provider_shared_secret" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret"></a>

```python
def reset_provider_shared_secret() -> None
```

##### `reset_provider_user_name_template` <a name="reset_provider_user_name_template" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate"></a>

```python
def reset_provider_user_name_template() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-okta.authenticator.Authenticator.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.authenticator.Authenticator.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import authenticator

authenticator.Authenticator.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import authenticator

authenticator.Authenticator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import authenticator

authenticator.Authenticator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId">provider_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput">provider_auth_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput">provider_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput">provider_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput">provider_integration_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput">provider_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput">provider_secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput">provider_shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput">provider_user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput">settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort">provider_auth_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHost">provider_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname">provider_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey">provider_integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJson">provider_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey">provider_secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret">provider_shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate">provider_user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settings">settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authenticator.Authenticator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authenticator.Authenticator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authenticator.Authenticator.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authenticator.Authenticator.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authenticator.Authenticator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.Authenticator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authenticator.Authenticator.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `provider_instance_id`<sup>Required</sup> <a name="provider_instance_id" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId"></a>

```python
provider_instance_id: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.authenticator.Authenticator.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_auth_port_input`<sup>Optional</sup> <a name="provider_auth_port_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput"></a>

```python
provider_auth_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_host_input`<sup>Optional</sup> <a name="provider_host_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput"></a>

```python
provider_host_input: str
```

- *Type:* str

---

##### `provider_hostname_input`<sup>Optional</sup> <a name="provider_hostname_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput"></a>

```python
provider_hostname_input: str
```

- *Type:* str

---

##### `provider_integration_key_input`<sup>Optional</sup> <a name="provider_integration_key_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput"></a>

```python
provider_integration_key_input: str
```

- *Type:* str

---

##### `provider_json_input`<sup>Optional</sup> <a name="provider_json_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput"></a>

```python
provider_json_input: str
```

- *Type:* str

---

##### `provider_secret_key_input`<sup>Optional</sup> <a name="provider_secret_key_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput"></a>

```python
provider_secret_key_input: str
```

- *Type:* str

---

##### `provider_shared_secret_input`<sup>Optional</sup> <a name="provider_shared_secret_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput"></a>

```python
provider_shared_secret_input: str
```

- *Type:* str

---

##### `provider_user_name_template_input`<sup>Optional</sup> <a name="provider_user_name_template_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput"></a>

```python
provider_user_name_template_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput"></a>

```python
settings_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.authenticator.Authenticator.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-okta.authenticator.Authenticator.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authenticator.Authenticator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_auth_port`<sup>Required</sup> <a name="provider_auth_port" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort"></a>

```python
provider_auth_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_host`<sup>Required</sup> <a name="provider_host" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHost"></a>

```python
provider_host: str
```

- *Type:* str

---

##### `provider_hostname`<sup>Required</sup> <a name="provider_hostname" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname"></a>

```python
provider_hostname: str
```

- *Type:* str

---

##### `provider_integration_key`<sup>Required</sup> <a name="provider_integration_key" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey"></a>

```python
provider_integration_key: str
```

- *Type:* str

---

##### `provider_json`<sup>Required</sup> <a name="provider_json" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJson"></a>

```python
provider_json: str
```

- *Type:* str

---

##### `provider_secret_key`<sup>Required</sup> <a name="provider_secret_key" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey"></a>

```python
provider_secret_key: str
```

- *Type:* str

---

##### `provider_shared_secret`<sup>Required</sup> <a name="provider_shared_secret" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret"></a>

```python
provider_shared_secret: str
```

- *Type:* str

---

##### `provider_user_name_template`<sup>Required</sup> <a name="provider_user_name_template" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate"></a>

```python
provider_user_name_template: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-okta.authenticator.Authenticator.property.settings"></a>

```python
settings: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authenticator.Authenticator.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatorConfig <a name="AuthenticatorConfig" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import authenticator

authenticator.AuthenticatorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  name: str,
  id: str = None,
  provider_auth_port: typing.Union[int, float] = None,
  provider_host: str = None,
  provider_hostname: str = None,
  provider_integration_key: str = None,
  provider_json: str = None,
  provider_secret_key: str = None,
  provider_shared_secret: str = None,
  provider_user_name_template: str = None,
  settings: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key">key</a></code> | <code>str</code> | A human-readable string that identifies the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name">name</a></code> | <code>str</code> | Display name of the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#id Authenticator#id}. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort">provider_auth_port</a></code> | <code>typing.Union[int, float]</code> | The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost">provider_host</a></code> | <code>str</code> | The Duo Security API hostname. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname">provider_hostname</a></code> | <code>str</code> | Server host name or IP address. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey">provider_integration_key</a></code> | <code>str</code> | The Duo Security integration key. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson">provider_json</a></code> | <code>str</code> | Provider in JSON format. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey">provider_secret_key</a></code> | <code>str</code> | The Duo Security secret key. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret">provider_shared_secret</a></code> | <code>str</code> | An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate">provider_user_name_template</a></code> | <code>str</code> | Format expected by the provider. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings">settings</a></code> | <code>str</code> | Authenticator settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status">status</a></code> | <code>str</code> | Authenticator status: ACTIVE or INACTIVE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A human-readable string that identifies the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#key Authenticator#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Display name of the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#name Authenticator#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#id Authenticator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_auth_port`<sup>Optional</sup> <a name="provider_auth_port" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort"></a>

```python
provider_auth_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_auth_port Authenticator#provider_auth_port}

---

##### `provider_host`<sup>Optional</sup> <a name="provider_host" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost"></a>

```python
provider_host: str
```

- *Type:* str

The Duo Security API hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_host Authenticator#provider_host}

---

##### `provider_hostname`<sup>Optional</sup> <a name="provider_hostname" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname"></a>

```python
provider_hostname: str
```

- *Type:* str

Server host name or IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_hostname Authenticator#provider_hostname}

---

##### `provider_integration_key`<sup>Optional</sup> <a name="provider_integration_key" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey"></a>

```python
provider_integration_key: str
```

- *Type:* str

The Duo Security integration key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_integration_key Authenticator#provider_integration_key}

---

##### `provider_json`<sup>Optional</sup> <a name="provider_json" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson"></a>

```python
provider_json: str
```

- *Type:* str

Provider in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_json Authenticator#provider_json}

---

##### `provider_secret_key`<sup>Optional</sup> <a name="provider_secret_key" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey"></a>

```python
provider_secret_key: str
```

- *Type:* str

The Duo Security secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_secret_key Authenticator#provider_secret_key}

---

##### `provider_shared_secret`<sup>Optional</sup> <a name="provider_shared_secret" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret"></a>

```python
provider_shared_secret: str
```

- *Type:* str

An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_shared_secret Authenticator#provider_shared_secret}

---

##### `provider_user_name_template`<sup>Optional</sup> <a name="provider_user_name_template" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate"></a>

```python
provider_user_name_template: str
```

- *Type:* str

Format expected by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_user_name_template Authenticator#provider_user_name_template}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings"></a>

```python
settings: str
```

- *Type:* str

Authenticator settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#settings Authenticator#settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Authenticator status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#status Authenticator#status}

---



