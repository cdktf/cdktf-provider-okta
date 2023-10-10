# `okta_user_base_schema_property`

Refer to the Terraform Registory for docs: [`okta_user_base_schema_property`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property).

# `userBaseSchemaProperty` Submodule <a name="`userBaseSchemaProperty` Submodule" id="@cdktf/provider-okta.userBaseSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserBaseSchemaProperty <a name="UserBaseSchemaProperty" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property okta_user_base_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_base_schema_property

userBaseSchemaProperty.UserBaseSchemaProperty(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
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
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#id UserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | Custom subschema user type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.index"></a>

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#index UserBaseSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.title"></a>

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#title UserBaseSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.type"></a>

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#type UserBaseSchemaProperty#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#id UserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.master"></a>

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#master UserBaseSchemaProperty#master}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.pattern"></a>

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#pattern UserBaseSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.permissions"></a>

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#permissions UserBaseSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#required UserBaseSchemaProperty#required}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.userType"></a>

- *Type:* str

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#user_type UserBaseSchemaProperty#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetMaster">reset_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master` <a name="reset_master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetMaster"></a>

```python
def reset_master() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import user_base_schema_property

userBaseSchemaProperty.UserBaseSchemaProperty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import user_base_schema_property

userBaseSchemaProperty.UserBaseSchemaProperty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import user_base_schema_property

userBaseSchemaProperty.UserBaseSchemaProperty.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.masterInput">master_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.master">master</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `master_input`<sup>Optional</sup> <a name="master_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.masterInput"></a>

```python
master_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.master"></a>

```python
master: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserBaseSchemaPropertyConfig <a name="UserBaseSchemaPropertyConfig" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_base_schema_property

userBaseSchemaProperty.UserBaseSchemaPropertyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
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
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#id UserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.userType">user_type</a></code> | <code>str</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.index"></a>

```python
index: str
```

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#index UserBaseSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#title UserBaseSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#type UserBaseSchemaProperty#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#id UserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.master"></a>

```python
master: str
```

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#master UserBaseSchemaProperty#master}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#pattern UserBaseSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#permissions UserBaseSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#required UserBaseSchemaProperty#required}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/user_base_schema_property#user_type UserBaseSchemaProperty#user_type}

---



