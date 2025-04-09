# `authServerDefault` Submodule <a name="`authServerDefault` Submodule" id="@cdktf/provider-okta.authServerDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerDefault <a name="AuthServerDefault" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default okta_auth_server_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_default

authServerDefault.AuthServerDefault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audiences: typing.List[str] = None,
  credentials_rotation_mode: str = None,
  description: str = None,
  id: str = None,
  issuer_mode: str = None,
  name: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.audiences">audiences</a></code> | <code>typing.List[str]</code> | The recipients that the tokens are intended for. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.credentialsRotationMode">credentials_rotation_mode</a></code> | <code>str</code> | The key rotation mode for the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#id AuthServerDefault#id}. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the authorization server. Not necessary but left for backwards capacity with legacy implementation. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.status">status</a></code> | <code>str</code> | Default to `ACTIVE`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.audiences"></a>

- *Type:* typing.List[str]

The recipients that the tokens are intended for.

This becomes the `aud` claim in an access token. Currently Okta only supports a single value here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#audiences AuthServerDefault#audiences}

---

##### `credentials_rotation_mode`<sup>Optional</sup> <a name="credentials_rotation_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.credentialsRotationMode"></a>

- *Type:* str

The key rotation mode for the authorization server.

Can be `AUTO` or `MANUAL`. Default: `MANUAL`.Credential rotation mode, in many cases you cannot set this to MANUAL, the API will ignore the value and you will get a perpetual diff. This should rarely be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#credentials_rotation_mode AuthServerDefault#credentials_rotation_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.description"></a>

- *Type:* str

The description of the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#description AuthServerDefault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#id AuthServerDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.issuerMode"></a>

- *Type:* str

*Early Access Property*.

Allows you to use a custom issuer URL. It can be set to `CUSTOM_URL`, `ORG_URL`, or `DYNAMIC`. Default: `ORG_URL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#issuer_mode AuthServerDefault#issuer_mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.name"></a>

- *Type:* str

The name of the authorization server. Not necessary but left for backwards capacity with legacy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#name AuthServerDefault#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.Initializer.parameter.status"></a>

- *Type:* str

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#status AuthServerDefault#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetCredentialsRotationMode">reset_credentials_rotation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_audiences` <a name="reset_audiences" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_credentials_rotation_mode` <a name="reset_credentials_rotation_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetCredentialsRotationMode"></a>

```python
def reset_credentials_rotation_mode() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthServerDefault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_default

authServerDefault.AuthServerDefault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_default

authServerDefault.AuthServerDefault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_default

authServerDefault.AuthServerDefault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_default

authServerDefault.AuthServerDefault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthServerDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthServerDefault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthServerDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsLastRotated">credentials_last_rotated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsNextRotation">credentials_next_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsRotationModeInput">credentials_rotation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsRotationMode">credentials_rotation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials_last_rotated`<sup>Required</sup> <a name="credentials_last_rotated" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsLastRotated"></a>

```python
credentials_last_rotated: str
```

- *Type:* str

---

##### `credentials_next_rotation`<sup>Required</sup> <a name="credentials_next_rotation" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsNextRotation"></a>

```python
credentials_next_rotation: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_rotation_mode_input`<sup>Optional</sup> <a name="credentials_rotation_mode_input" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsRotationModeInput"></a>

```python
credentials_rotation_mode_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credentials_rotation_mode`<sup>Required</sup> <a name="credentials_rotation_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.credentialsRotationMode"></a>

```python
credentials_rotation_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerDefault.AuthServerDefault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerDefaultConfig <a name="AuthServerDefaultConfig" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_default

authServerDefault.AuthServerDefaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audiences: typing.List[str] = None,
  credentials_rotation_mode: str = None,
  description: str = None,
  id: str = None,
  issuer_mode: str = None,
  name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | The recipients that the tokens are intended for. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.credentialsRotationMode">credentials_rotation_mode</a></code> | <code>str</code> | The key rotation mode for the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.description">description</a></code> | <code>str</code> | The description of the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#id AuthServerDefault#id}. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.name">name</a></code> | <code>str</code> | The name of the authorization server. Not necessary but left for backwards capacity with legacy implementation. |
| <code><a href="#@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.status">status</a></code> | <code>str</code> | Default to `ACTIVE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

The recipients that the tokens are intended for.

This becomes the `aud` claim in an access token. Currently Okta only supports a single value here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#audiences AuthServerDefault#audiences}

---

##### `credentials_rotation_mode`<sup>Optional</sup> <a name="credentials_rotation_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.credentialsRotationMode"></a>

```python
credentials_rotation_mode: str
```

- *Type:* str

The key rotation mode for the authorization server.

Can be `AUTO` or `MANUAL`. Default: `MANUAL`.Credential rotation mode, in many cases you cannot set this to MANUAL, the API will ignore the value and you will get a perpetual diff. This should rarely be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#credentials_rotation_mode AuthServerDefault#credentials_rotation_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#description AuthServerDefault#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#id AuthServerDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

*Early Access Property*.

Allows you to use a custom issuer URL. It can be set to `CUSTOM_URL`, `ORG_URL`, or `DYNAMIC`. Default: `ORG_URL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#issuer_mode AuthServerDefault#issuer_mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the authorization server. Not necessary but left for backwards capacity with legacy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#name AuthServerDefault#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerDefault.AuthServerDefaultConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/auth_server_default#status AuthServerDefault#status}

---



