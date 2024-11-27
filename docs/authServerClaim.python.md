# `authServerClaim` Submodule <a name="`authServerClaim` Submodule" id="@cdktf/provider-okta.authServerClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerClaim <a name="AuthServerClaim" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim okta_auth_server_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim

authServerClaim.AuthServerClaim(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  claim_type: str,
  name: str,
  value: str,
  always_include_in_token: typing.Union[bool, IResolvable] = None,
  group_filter_type: str = None,
  id: str = None,
  scopes: typing.List[str] = None,
  status: str = None,
  value_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.authServerId">auth_server_id</a></code> | <code>str</code> | ID of the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.claimType">claim_type</a></code> | <code>str</code> | Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.value">value</a></code> | <code>str</code> | The value of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.alwaysIncludeInToken">always_include_in_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to include claims in token, by default it is set to `true`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.groupFilterType">group_filter_type</a></code> | <code>str</code> | Specifies the type of group filter if `value_type` is `GROUPS`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#id AuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | The list of scopes the auth server claim is tied to. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.status">status</a></code> | <code>str</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.valueType">value_type</a></code> | <code>str</code> | The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.authServerId"></a>

- *Type:* str

ID of the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#auth_server_id AuthServerClaim#auth_server_id}

---

##### `claim_type`<sup>Required</sup> <a name="claim_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.claimType"></a>

- *Type:* str

Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.name"></a>

- *Type:* str

The name of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#name AuthServerClaim#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.value"></a>

- *Type:* str

The value of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#value AuthServerClaim#value}

---

##### `always_include_in_token`<sup>Optional</sup> <a name="always_include_in_token" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.alwaysIncludeInToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to include claims in token, by default it is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}

---

##### `group_filter_type`<sup>Optional</sup> <a name="group_filter_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.groupFilterType"></a>

- *Type:* str

Specifies the type of group filter if `value_type` is `GROUPS`.

Can be set to one of the following `STARTS_WITH`, `EQUALS`, `CONTAINS`, `REGEX`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#group_filter_type AuthServerClaim#group_filter_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#id AuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

The list of scopes the auth server claim is tied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#scopes AuthServerClaim#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.status"></a>

- *Type:* str

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#status AuthServerClaim#status}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.valueType"></a>

- *Type:* str

The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken">reset_always_include_in_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType">reset_group_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_always_include_in_token` <a name="reset_always_include_in_token" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken"></a>

```python
def reset_always_include_in_token() -> None
```

##### `reset_group_filter_type` <a name="reset_group_filter_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType"></a>

```python
def reset_group_filter_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType"></a>

```python
def reset_value_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthServerClaim resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim

authServerClaim.AuthServerClaim.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim

authServerClaim.AuthServerClaim.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim

authServerClaim.AuthServerClaim.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim

authServerClaim.AuthServerClaim.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthServerClaim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthServerClaim to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthServerClaim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerClaim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput">always_include_in_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput">auth_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput">claim_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput">group_filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken">always_include_in_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId">auth_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType">claim_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType">group_filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `always_include_in_token_input`<sup>Optional</sup> <a name="always_include_in_token_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput"></a>

```python
always_include_in_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_server_id_input`<sup>Optional</sup> <a name="auth_server_id_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput"></a>

```python
auth_server_id_input: str
```

- *Type:* str

---

##### `claim_type_input`<sup>Optional</sup> <a name="claim_type_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput"></a>

```python
claim_type_input: str
```

- *Type:* str

---

##### `group_filter_type_input`<sup>Optional</sup> <a name="group_filter_type_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput"></a>

```python
group_filter_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `always_include_in_token`<sup>Required</sup> <a name="always_include_in_token" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken"></a>

```python
always_include_in_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

---

##### `claim_type`<sup>Required</sup> <a name="claim_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType"></a>

```python
claim_type: str
```

- *Type:* str

---

##### `group_filter_type`<sup>Required</sup> <a name="group_filter_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType"></a>

```python
group_filter_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerClaimConfig <a name="AuthServerClaimConfig" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_claim

authServerClaim.AuthServerClaimConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  claim_type: str,
  name: str,
  value: str,
  always_include_in_token: typing.Union[bool, IResolvable] = None,
  group_filter_type: str = None,
  id: str = None,
  scopes: typing.List[str] = None,
  status: str = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId">auth_server_id</a></code> | <code>str</code> | ID of the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType">claim_type</a></code> | <code>str</code> | Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name">name</a></code> | <code>str</code> | The name of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value">value</a></code> | <code>str</code> | The value of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken">always_include_in_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to include claims in token, by default it is set to `true`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType">group_filter_type</a></code> | <code>str</code> | Specifies the type of group filter if `value_type` is `GROUPS`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#id AuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | The list of scopes the auth server claim is tied to. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status">status</a></code> | <code>str</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType">value_type</a></code> | <code>str</code> | The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

ID of the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#auth_server_id AuthServerClaim#auth_server_id}

---

##### `claim_type`<sup>Required</sup> <a name="claim_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType"></a>

```python
claim_type: str
```

- *Type:* str

Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#name AuthServerClaim#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#value AuthServerClaim#value}

---

##### `always_include_in_token`<sup>Optional</sup> <a name="always_include_in_token" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken"></a>

```python
always_include_in_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to include claims in token, by default it is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}

---

##### `group_filter_type`<sup>Optional</sup> <a name="group_filter_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType"></a>

```python
group_filter_type: str
```

- *Type:* str

Specifies the type of group filter if `value_type` is `GROUPS`.

Can be set to one of the following `STARTS_WITH`, `EQUALS`, `CONTAINS`, `REGEX`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#group_filter_type AuthServerClaim#group_filter_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#id AuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

The list of scopes the auth server claim is tied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#scopes AuthServerClaim#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#status AuthServerClaim#status}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}

---



