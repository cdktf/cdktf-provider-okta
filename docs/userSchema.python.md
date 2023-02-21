# `userSchema` Submodule <a name="`userSchema` Submodule" id="@cdktf/provider-okta.userSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSchema <a name="UserSchema" id="@cdktf/provider-okta.userSchema.UserSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_schema okta_user_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchema(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index: str,
  title: str,
  type: str,
  array_enum: typing.List[str] = None,
  array_one_of: typing.Union[IResolvable, typing.List[UserSchemaArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  master_override_priority: typing.Union[IResolvable, typing.List[UserSchemaMasterOverridePriority]] = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[UserSchemaOneOf]] = None,
  pattern: str = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  scope: str = None,
  unique: str = None,
  user_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.arrayType">array_type</a></code> | <code>str</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.description">description</a></code> | <code>str</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.enum">enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.externalName">external_name</a></code> | <code>str</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.externalNamespace">external_namespace</a></code> | <code>str</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.masterOverridePriority">master_override_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.unique">unique</a></code> | <code>str</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | Custom subschema user type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.index"></a>

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#index UserSchema#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.title"></a>

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.type"></a>

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.arrayEnum"></a>

- *Type:* typing.List[str]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_enum UserSchema#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.arrayOneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_one_of UserSchema#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.arrayType"></a>

- *Type:* str

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_type UserSchema#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.description"></a>

- *Type:* str

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#description UserSchema#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.enum"></a>

- *Type:* typing.List[str]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#enum UserSchema#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.externalName"></a>

- *Type:* str

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_name UserSchema#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.externalNamespace"></a>

- *Type:* str

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_namespace UserSchema#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.master"></a>

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master UserSchema#master}

---

##### `master_override_priority`<sup>Optional</sup> <a name="master_override_priority" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.masterOverridePriority"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]

master_override_priority block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master_override_priority UserSchema#master_override_priority}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#max_length UserSchema#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#min_length UserSchema#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.oneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#one_of UserSchema#one_of}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.pattern"></a>

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#pattern UserSchema#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.permissions"></a>

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#permissions UserSchema#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#required UserSchema#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.unique"></a>

- *Type:* str

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#unique UserSchema#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.userType"></a>

- *Type:* str

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#user_type UserSchema#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf">put_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority">put_master_override_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putOneOf">put_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayEnum">reset_array_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayOneOf">reset_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayType">reset_array_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetExternalNamespace">reset_external_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMaster">reset_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMasterOverridePriority">reset_master_override_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetOneOf">reset_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetUnique">reset_unique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchema.UserSchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.userSchema.UserSchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.userSchema.UserSchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.userSchema.UserSchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_array_one_of` <a name="put_array_one_of" id="@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf"></a>

```python
def put_array_one_of(
  value: typing.Union[IResolvable, typing.List[UserSchemaArrayOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]

---

##### `put_master_override_priority` <a name="put_master_override_priority" id="@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority"></a>

```python
def put_master_override_priority(
  value: typing.Union[IResolvable, typing.List[UserSchemaMasterOverridePriority]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]

---

##### `put_one_of` <a name="put_one_of" id="@cdktf/provider-okta.userSchema.UserSchema.putOneOf"></a>

```python
def put_one_of(
  value: typing.Union[IResolvable, typing.List[UserSchemaOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.putOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]

---

##### `reset_array_enum` <a name="reset_array_enum" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayEnum"></a>

```python
def reset_array_enum() -> None
```

##### `reset_array_one_of` <a name="reset_array_one_of" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayOneOf"></a>

```python
def reset_array_one_of() -> None
```

##### `reset_array_type` <a name="reset_array_type" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayType"></a>

```python
def reset_array_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.userSchema.UserSchema.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktf/provider-okta.userSchema.UserSchema.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-okta.userSchema.UserSchema.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_external_namespace` <a name="reset_external_namespace" id="@cdktf/provider-okta.userSchema.UserSchema.resetExternalNamespace"></a>

```python
def reset_external_namespace() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.userSchema.UserSchema.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master` <a name="reset_master" id="@cdktf/provider-okta.userSchema.UserSchema.resetMaster"></a>

```python
def reset_master() -> None
```

##### `reset_master_override_priority` <a name="reset_master_override_priority" id="@cdktf/provider-okta.userSchema.UserSchema.resetMasterOverridePriority"></a>

```python
def reset_master_override_priority() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-okta.userSchema.UserSchema.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-okta.userSchema.UserSchema.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_one_of` <a name="reset_one_of" id="@cdktf/provider-okta.userSchema.UserSchema.resetOneOf"></a>

```python
def reset_one_of() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-okta.userSchema.UserSchema.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-okta.userSchema.UserSchema.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.userSchema.UserSchema.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-okta.userSchema.UserSchema.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_unique` <a name="reset_unique" id="@cdktf/provider-okta.userSchema.UserSchema.resetUnique"></a>

```python
def reset_unique() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-okta.userSchema.UserSchema.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.userSchema.UserSchema.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchema.UserSchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchema.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOf">array_one_of</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList">UserSchemaArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriority">master_override_priority</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList">UserSchemaMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.oneOf">one_of</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList">UserSchemaOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnumInput">array_enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOfInput">array_one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayTypeInput">array_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespaceInput">external_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterInput">master_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriorityInput">master_override_priority_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.oneOfInput">one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.uniqueInput">unique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayType">array_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespace">external_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.master">master</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.unique">unique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.userSchema.UserSchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.userSchema.UserSchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchema.UserSchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.userSchema.UserSchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchema.UserSchema.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchema.UserSchema.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userSchema.UserSchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userSchema.UserSchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchema.UserSchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchema.UserSchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchema.UserSchema.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `array_one_of`<sup>Required</sup> <a name="array_one_of" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOf"></a>

```python
array_one_of: UserSchemaArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList">UserSchemaArrayOneOfList</a>

---

##### `master_override_priority`<sup>Required</sup> <a name="master_override_priority" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriority"></a>

```python
master_override_priority: UserSchemaMasterOverridePriorityList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList">UserSchemaMasterOverridePriorityList</a>

---

##### `one_of`<sup>Required</sup> <a name="one_of" id="@cdktf/provider-okta.userSchema.UserSchema.property.oneOf"></a>

```python
one_of: UserSchemaOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList">UserSchemaOneOfList</a>

---

##### `array_enum_input`<sup>Optional</sup> <a name="array_enum_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnumInput"></a>

```python
array_enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_one_of_input`<sup>Optional</sup> <a name="array_one_of_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOfInput"></a>

```python
array_one_of_input: typing.Union[IResolvable, typing.List[UserSchemaArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]

---

##### `array_type_input`<sup>Optional</sup> <a name="array_type_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayTypeInput"></a>

```python
array_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `external_namespace_input`<sup>Optional</sup> <a name="external_namespace_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespaceInput"></a>

```python
external_namespace_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `master_input`<sup>Optional</sup> <a name="master_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterInput"></a>

```python
master_input: str
```

- *Type:* str

---

##### `master_override_priority_input`<sup>Optional</sup> <a name="master_override_priority_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriorityInput"></a>

```python
master_override_priority_input: typing.Union[IResolvable, typing.List[UserSchemaMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `one_of_input`<sup>Optional</sup> <a name="one_of_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.oneOfInput"></a>

```python
one_of_input: typing.Union[IResolvable, typing.List[UserSchemaOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_input`<sup>Optional</sup> <a name="unique_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.uniqueInput"></a>

```python
unique_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-okta.userSchema.UserSchema.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `array_enum`<sup>Required</sup> <a name="array_enum" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_type`<sup>Required</sup> <a name="array_type" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.userSchema.UserSchema.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.userSchema.UserSchema.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `external_namespace`<sup>Required</sup> <a name="external_namespace" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchema.UserSchema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchema.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.userSchema.UserSchema.property.master"></a>

```python
master: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-okta.userSchema.UserSchema.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-okta.userSchema.UserSchema.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.userSchema.UserSchema.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.userSchema.UserSchema.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.userSchema.UserSchema.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchema.UserSchema.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchema.UserSchema.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchema.UserSchema.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.userSchema.UserSchema.property.unique"></a>

```python
unique: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.userSchema.UserSchema.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.userSchema.UserSchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserSchemaArrayOneOf <a name="UserSchemaArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaArrayOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#const UserSchema#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

### UserSchemaConfig <a name="UserSchemaConfig" id="@cdktf/provider-okta.userSchema.UserSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index: str,
  title: str,
  type: str,
  array_enum: typing.List[str] = None,
  array_one_of: typing.Union[IResolvable, typing.List[UserSchemaArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  master_override_priority: typing.Union[IResolvable, typing.List[UserSchemaMasterOverridePriority]] = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[UserSchemaOneOf]] = None,
  pattern: str = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  scope: str = None,
  unique: str = None,
  user_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayType">array_type</a></code> | <code>str</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.description">description</a></code> | <code>str</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.enum">enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalName">external_name</a></code> | <code>str</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalNamespace">external_namespace</a></code> | <code>str</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.masterOverridePriority">master_override_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.unique">unique</a></code> | <code>str</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.userType">user_type</a></code> | <code>str</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.index"></a>

```python
index: str
```

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#index UserSchema#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_enum UserSchema#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayOneOf"></a>

```python
array_one_of: typing.Union[IResolvable, typing.List[UserSchemaArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_one_of UserSchema#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_type UserSchema#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#description UserSchema#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#enum UserSchema#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_name UserSchema#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_namespace UserSchema#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.master"></a>

```python
master: str
```

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master UserSchema#master}

---

##### `master_override_priority`<sup>Optional</sup> <a name="master_override_priority" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.masterOverridePriority"></a>

```python
master_override_priority: typing.Union[IResolvable, typing.List[UserSchemaMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]

master_override_priority block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master_override_priority UserSchema#master_override_priority}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#max_length UserSchema#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#min_length UserSchema#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.oneOf"></a>

```python
one_of: typing.Union[IResolvable, typing.List[UserSchemaOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#one_of UserSchema#one_of}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#pattern UserSchema#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#permissions UserSchema#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#required UserSchema#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.unique"></a>

```python
unique: str
```

- *Type:* str

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#unique UserSchema#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#user_type UserSchema#user_type}

---

### UserSchemaMasterOverridePriority <a name="UserSchemaMasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaMasterOverridePriority(
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#value UserSchema#value}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#value UserSchema#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}.

---

### UserSchemaOneOf <a name="UserSchemaOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#const UserSchema#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

## Classes <a name="Classes" id="Classes"></a>

### UserSchemaArrayOneOfList <a name="UserSchemaArrayOneOfList" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaArrayOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserSchemaArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserSchemaArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>]]

---


### UserSchemaArrayOneOfOutputReference <a name="UserSchemaArrayOneOfOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaArrayOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[UserSchemaArrayOneOf, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf">UserSchemaArrayOneOf</a>, cdktf.IResolvable]

---


### UserSchemaMasterOverridePriorityList <a name="UserSchemaMasterOverridePriorityList" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaMasterOverridePriorityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserSchemaMasterOverridePriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserSchemaMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>]]

---


### UserSchemaMasterOverridePriorityOutputReference <a name="UserSchemaMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaMasterOverridePriorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[UserSchemaMasterOverridePriority, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority">UserSchemaMasterOverridePriority</a>, cdktf.IResolvable]

---


### UserSchemaOneOfList <a name="UserSchemaOneOfList" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserSchemaOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserSchemaOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>]]

---


### UserSchemaOneOfOutputReference <a name="UserSchemaOneOfOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema

userSchema.UserSchemaOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[UserSchemaOneOf, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf">UserSchemaOneOf</a>, cdktf.IResolvable]

---



