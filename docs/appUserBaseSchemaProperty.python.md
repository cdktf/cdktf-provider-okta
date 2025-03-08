# `appUserBaseSchemaProperty` Submodule <a name="`appUserBaseSchemaProperty` Submodule" id="@cdktf/provider-okta.appUserBaseSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserBaseSchemaProperty <a name="AppUserBaseSchemaProperty" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property okta_app_user_base_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_base_schema_property

appUserBaseSchemaProperty.AppUserBaseSchemaProperty(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  index: str,
  title: str,
  type: str,
  id: str = None,
  master: str = None,
  pattern: str = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  user_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The Application's ID the user schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.master">master</a></code> | <code>str</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. Default: `PROFILE_MASTER`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | User type ID. By default, it is `default`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.appId"></a>

- *Type:* str

The Application's ID the user schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#app_id AppUserBaseSchemaProperty#app_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.index"></a>

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#index AppUserBaseSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.title"></a>

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#title AppUserBaseSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.type"></a>

- *Type:* str

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#type AppUserBaseSchemaProperty#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.master"></a>

- *Type:* str

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. Default: `PROFILE_MASTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#master AppUserBaseSchemaProperty#master}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.pattern"></a>

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#pattern AppUserBaseSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.permissions"></a>

- *Type:* str

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#permissions AppUserBaseSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#required AppUserBaseSchemaProperty#required}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.Initializer.parameter.userType"></a>

- *Type:* str

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#user_type AppUserBaseSchemaProperty#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetMaster">reset_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master` <a name="reset_master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetMaster"></a>

```python
def reset_master() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppUserBaseSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_user_base_schema_property

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_user_base_schema_property

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_user_base_schema_property

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_user_base_schema_property

appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppUserBaseSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppUserBaseSchemaProperty to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppUserBaseSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppUserBaseSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.masterInput">master_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.master">master</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `master_input`<sup>Optional</sup> <a name="master_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.masterInput"></a>

```python
master_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.master"></a>

```python
master: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaProperty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserBaseSchemaPropertyConfig <a name="AppUserBaseSchemaPropertyConfig" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_base_schema_property

appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  index: str,
  title: str,
  type: str,
  id: str = None,
  master: str = None,
  pattern: str = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  user_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.appId">app_id</a></code> | <code>str</code> | The Application's ID the user schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.type">type</a></code> | <code>str</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.master">master</a></code> | <code>str</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. Default: `PROFILE_MASTER`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>str</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.userType">user_type</a></code> | <code>str</code> | User type ID. By default, it is `default`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The Application's ID the user schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#app_id AppUserBaseSchemaProperty#app_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.index"></a>

```python
index: str
```

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#index AppUserBaseSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#title AppUserBaseSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#type AppUserBaseSchemaProperty#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#id AppUserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.master"></a>

```python
master: str
```

- *Type:* str

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. Default: `PROFILE_MASTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#master AppUserBaseSchemaProperty#master}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#pattern AppUserBaseSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#permissions AppUserBaseSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#required AppUserBaseSchemaProperty#required}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.appUserBaseSchemaProperty.AppUserBaseSchemaPropertyConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/resources/app_user_base_schema_property#user_type AppUserBaseSchemaProperty#user_type}

---



