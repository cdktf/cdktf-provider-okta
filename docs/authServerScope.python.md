# `okta_auth_server_scope`

Refer to the Terraform Registory for docs: [`okta_auth_server_scope`](https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope).

# `authServerScope` Submodule <a name="`authServerScope` Submodule" id="@cdktf/provider-okta.authServerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerScope <a name="AuthServerScope" id="@cdktf/provider-okta.authServerScope.AuthServerScope"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope okta_auth_server_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_scope

authServerScope.AuthServerScope(
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
  name: str,
  consent: str = None,
  default: typing.Union[bool, IResolvable] = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  metadata_publish: str = None,
  optional: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.authServerId">auth_server_id</a></code> | <code>str</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.name">name</a></code> | <code>str</code> | Auth server scope name. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.consent">consent</a></code> | <code>str</code> | EA Feature and thus it is simply ignored if the feature is off. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the Auth Server Scope. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Name of the end user displayed in a consent dialog box. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#id AuthServerScope#id}. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.metadataPublish">metadata_publish</a></code> | <code>str</code> | Whether to publish metadata or not, matching API type despite the fact it could just be a boolean. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the scope optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.authServerId"></a>

- *Type:* str

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#auth_server_id AuthServerScope#auth_server_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.name"></a>

- *Type:* str

Auth server scope name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#name AuthServerScope#name}

---

##### `consent`<sup>Optional</sup> <a name="consent" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.consent"></a>

- *Type:* str

EA Feature and thus it is simply ignored if the feature is off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#consent AuthServerScope#consent}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#default AuthServerScope#default}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.description"></a>

- *Type:* str

Description of the Auth Server Scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#description AuthServerScope#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.displayName"></a>

- *Type:* str

Name of the end user displayed in a consent dialog box.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#display_name AuthServerScope#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#id AuthServerScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata_publish`<sup>Optional</sup> <a name="metadata_publish" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.metadataPublish"></a>

- *Type:* str

Whether to publish metadata or not, matching API type despite the fact it could just be a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#metadata_publish AuthServerScope#metadata_publish}

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.optional"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the scope optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#optional AuthServerScope#optional}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetConsent">reset_consent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetMetadataPublish">reset_metadata_publish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetOptional">reset_optional</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.authServerScope.AuthServerScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerScope.AuthServerScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.authServerScope.AuthServerScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerScope.AuthServerScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authServerScope.AuthServerScope.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_consent` <a name="reset_consent" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetConsent"></a>

```python
def reset_consent() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata_publish` <a name="reset_metadata_publish" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetMetadataPublish"></a>

```python
def reset_metadata_publish() -> None
```

##### `reset_optional` <a name="reset_optional" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetOptional"></a>

```python
def reset_optional() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthServerScope resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_scope

authServerScope.AuthServerScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_scope

authServerScope.AuthServerScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_scope

authServerScope.AuthServerScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.authServerScope.AuthServerScope.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_scope

authServerScope.AuthServerScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthServerScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerScope.AuthServerScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthServerScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthServerScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerScope.AuthServerScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.systemAttribute">system_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerIdInput">auth_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.consentInput">consent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublishInput">metadata_publish_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.optionalInput">optional_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerId">auth_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.consent">consent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublish">metadata_publish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.systemAttribute"></a>

```python
system_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auth_server_id_input`<sup>Optional</sup> <a name="auth_server_id_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerIdInput"></a>

```python
auth_server_id_input: str
```

- *Type:* str

---

##### `consent_input`<sup>Optional</sup> <a name="consent_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.consentInput"></a>

```python
consent_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_publish_input`<sup>Optional</sup> <a name="metadata_publish_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublishInput"></a>

```python
metadata_publish_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `optional_input`<sup>Optional</sup> <a name="optional_input" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.optionalInput"></a>

```python
optional_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

---

##### `consent`<sup>Required</sup> <a name="consent" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.consent"></a>

```python
consent: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata_publish`<sup>Required</sup> <a name="metadata_publish" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublish"></a>

```python
metadata_publish: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerScopeConfig <a name="AuthServerScopeConfig" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_scope

authServerScope.AuthServerScopeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  name: str,
  consent: str = None,
  default: typing.Union[bool, IResolvable] = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  metadata_publish: str = None,
  optional: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.authServerId">auth_server_id</a></code> | <code>str</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.name">name</a></code> | <code>str</code> | Auth server scope name. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.consent">consent</a></code> | <code>str</code> | EA Feature and thus it is simply ignored if the feature is off. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.description">description</a></code> | <code>str</code> | Description of the Auth Server Scope. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.displayName">display_name</a></code> | <code>str</code> | Name of the end user displayed in a consent dialog box. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#id AuthServerScope#id}. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.metadataPublish">metadata_publish</a></code> | <code>str</code> | Whether to publish metadata or not, matching API type despite the fact it could just be a boolean. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.optional">optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the scope optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#auth_server_id AuthServerScope#auth_server_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Auth server scope name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#name AuthServerScope#name}

---

##### `consent`<sup>Optional</sup> <a name="consent" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.consent"></a>

```python
consent: str
```

- *Type:* str

EA Feature and thus it is simply ignored if the feature is off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#consent AuthServerScope#consent}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#default AuthServerScope#default}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the Auth Server Scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#description AuthServerScope#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Name of the end user displayed in a consent dialog box.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#display_name AuthServerScope#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#id AuthServerScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata_publish`<sup>Optional</sup> <a name="metadata_publish" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.metadataPublish"></a>

```python
metadata_publish: str
```

- *Type:* str

Whether to publish metadata or not, matching API type despite the fact it could just be a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#metadata_publish AuthServerScope#metadata_publish}

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.optional"></a>

```python
optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the scope optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/auth_server_scope#optional AuthServerScope#optional}

---



