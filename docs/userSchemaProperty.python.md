# `userSchemaProperty` Submodule <a name="`userSchemaProperty` Submodule" id="@cdktf/provider-okta.userSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSchemaProperty <a name="UserSchemaProperty" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property okta_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaProperty(
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
  array_enum: typing.List[str] = None,
  array_one_of: typing.Union[IResolvable, typing.List[UserSchemaPropertyArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  master_override_priority: typing.Union[IResolvable, typing.List[UserSchemaPropertyMasterOverridePriority]] = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[UserSchemaPropertyOneOf]] = None,
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
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayType">array_type</a></code> | <code>str</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.enum">enum</a></code> | <code>typing.List[str]</code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalName">external_name</a></code> | <code>str</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalNamespace">external_namespace</a></code> | <code>str</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#id UserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.master">master</a></code> | <code>str</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.masterOverridePriority">master_override_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>str</code> | determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.unique">unique</a></code> | <code>str</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | User type ID. By default, it is `default`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.index"></a>

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#index UserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.title"></a>

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.type"></a>

- *Type:* str

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#type UserSchemaProperty#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayEnum"></a>

- *Type:* typing.List[str]

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#array_enum UserSchemaProperty#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayOneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#array_one_of UserSchemaProperty#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayType"></a>

- *Type:* str

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#array_type UserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.description"></a>

- *Type:* str

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#description UserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.enum"></a>

- *Type:* typing.List[str]

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#enum UserSchemaProperty#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalName"></a>

- *Type:* str

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#external_name UserSchemaProperty#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalNamespace"></a>

- *Type:* str

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#external_namespace UserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#id UserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.master"></a>

- *Type:* str

Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#master UserSchemaProperty#master}

---

##### `master_override_priority`<sup>Optional</sup> <a name="master_override_priority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.masterOverridePriority"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#master_override_priority UserSchemaProperty#master_override_priority}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#max_length UserSchemaProperty#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#min_length UserSchemaProperty#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.oneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#one_of UserSchemaProperty#one_of}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.pattern"></a>

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#pattern UserSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.permissions"></a>

- *Type:* str

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#permissions UserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#required UserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* str

determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#scope UserSchemaProperty#scope}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.unique"></a>

- *Type:* str

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#unique UserSchemaProperty#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.userType"></a>

- *Type:* str

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#user_type UserSchemaProperty#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf">put_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority">put_master_override_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf">put_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum">reset_array_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf">reset_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType">reset_array_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace">reset_external_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster">reset_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority">reset_master_override_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf">reset_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique">reset_unique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_array_one_of` <a name="put_array_one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf"></a>

```python
def put_array_one_of(
  value: typing.Union[IResolvable, typing.List[UserSchemaPropertyArrayOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]

---

##### `put_master_override_priority` <a name="put_master_override_priority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority"></a>

```python
def put_master_override_priority(
  value: typing.Union[IResolvable, typing.List[UserSchemaPropertyMasterOverridePriority]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]

---

##### `put_one_of` <a name="put_one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf"></a>

```python
def put_one_of(
  value: typing.Union[IResolvable, typing.List[UserSchemaPropertyOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]

---

##### `reset_array_enum` <a name="reset_array_enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum"></a>

```python
def reset_array_enum() -> None
```

##### `reset_array_one_of` <a name="reset_array_one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf"></a>

```python
def reset_array_one_of() -> None
```

##### `reset_array_type` <a name="reset_array_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType"></a>

```python
def reset_array_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_external_namespace` <a name="reset_external_namespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace"></a>

```python
def reset_external_namespace() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master` <a name="reset_master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster"></a>

```python
def reset_master() -> None
```

##### `reset_master_override_priority` <a name="reset_master_override_priority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority"></a>

```python
def reset_master_override_priority() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_one_of` <a name="reset_one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf"></a>

```python
def reset_one_of() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_unique` <a name="reset_unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique"></a>

```python
def reset_unique() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UserSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaProperty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaProperty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaProperty.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaProperty.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UserSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UserSchemaProperty to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UserSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf">array_one_of</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority">master_override_priority</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf">one_of</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput">array_enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput">array_one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput">array_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput">external_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput">master_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput">master_override_priority_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput">one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput">unique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType">array_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace">external_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master">master</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique">unique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `array_one_of`<sup>Required</sup> <a name="array_one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf"></a>

```python
array_one_of: UserSchemaPropertyArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a>

---

##### `master_override_priority`<sup>Required</sup> <a name="master_override_priority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority"></a>

```python
master_override_priority: UserSchemaPropertyMasterOverridePriorityList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a>

---

##### `one_of`<sup>Required</sup> <a name="one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf"></a>

```python
one_of: UserSchemaPropertyOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a>

---

##### `array_enum_input`<sup>Optional</sup> <a name="array_enum_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput"></a>

```python
array_enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_one_of_input`<sup>Optional</sup> <a name="array_one_of_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput"></a>

```python
array_one_of_input: typing.Union[IResolvable, typing.List[UserSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]

---

##### `array_type_input`<sup>Optional</sup> <a name="array_type_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput"></a>

```python
array_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `external_namespace_input`<sup>Optional</sup> <a name="external_namespace_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput"></a>

```python
external_namespace_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `master_input`<sup>Optional</sup> <a name="master_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput"></a>

```python
master_input: str
```

- *Type:* str

---

##### `master_override_priority_input`<sup>Optional</sup> <a name="master_override_priority_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput"></a>

```python
master_override_priority_input: typing.Union[IResolvable, typing.List[UserSchemaPropertyMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `one_of_input`<sup>Optional</sup> <a name="one_of_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput"></a>

```python
one_of_input: typing.Union[IResolvable, typing.List[UserSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_input`<sup>Optional</sup> <a name="unique_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput"></a>

```python
unique_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `array_enum`<sup>Required</sup> <a name="array_enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_type`<sup>Required</sup> <a name="array_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `external_namespace`<sup>Required</sup> <a name="external_namespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master"></a>

```python
master: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique"></a>

```python
unique: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserSchemaPropertyArrayOneOf <a name="UserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyArrayOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const">const</a></code> | <code>str</code> | Value mapping to member of `array_enum`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title">title</a></code> | <code>str</code> | Display name for the enum value. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Value mapping to member of `array_enum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Display name for the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

### UserSchemaPropertyConfig <a name="UserSchemaPropertyConfig" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyConfig(
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
  array_enum: typing.List[str] = None,
  array_one_of: typing.Union[IResolvable, typing.List[UserSchemaPropertyArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  master_override_priority: typing.Union[IResolvable, typing.List[UserSchemaPropertyMasterOverridePriority]] = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[UserSchemaPropertyOneOf]] = None,
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
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type">type</a></code> | <code>str</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType">array_type</a></code> | <code>str</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description">description</a></code> | <code>str</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum">enum</a></code> | <code>typing.List[str]</code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName">external_name</a></code> | <code>str</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace">external_namespace</a></code> | <code>str</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#id UserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master">master</a></code> | <code>str</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority">master_override_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern">pattern</a></code> | <code>str</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>str</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope">scope</a></code> | <code>str</code> | determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique">unique</a></code> | <code>str</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType">user_type</a></code> | <code>str</code> | User type ID. By default, it is `default`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index"></a>

```python
index: str
```

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#index UserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#type UserSchemaProperty#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#array_enum UserSchemaProperty#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf"></a>

```python
array_one_of: typing.Union[IResolvable, typing.List[UserSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#array_one_of UserSchemaProperty#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#array_type UserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#description UserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#enum UserSchemaProperty#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#external_name UserSchemaProperty#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#external_namespace UserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#id UserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master"></a>

```python
master: str
```

- *Type:* str

Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#master UserSchemaProperty#master}

---

##### `master_override_priority`<sup>Optional</sup> <a name="master_override_priority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority"></a>

```python
master_override_priority: typing.Union[IResolvable, typing.List[UserSchemaPropertyMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#master_override_priority UserSchemaProperty#master_override_priority}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#max_length UserSchemaProperty#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#min_length UserSchemaProperty#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf"></a>

```python
one_of: typing.Union[IResolvable, typing.List[UserSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#one_of UserSchemaProperty#one_of}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#pattern UserSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#permissions UserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#required UserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#scope UserSchemaProperty#scope}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique"></a>

```python
unique: str
```

- *Type:* str

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#unique UserSchemaProperty#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#user_type UserSchemaProperty#user_type}

---

### UserSchemaPropertyMasterOverridePriority <a name="UserSchemaPropertyMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyMasterOverridePriority(
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#value UserSchemaProperty#value}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#type UserSchemaProperty#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#value UserSchemaProperty#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#type UserSchemaProperty#type}.

---

### UserSchemaPropertyOneOf <a name="UserSchemaPropertyOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### UserSchemaPropertyArrayOneOfList <a name="UserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyArrayOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserSchemaPropertyArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]]

---


### UserSchemaPropertyArrayOneOfOutputReference <a name="UserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserSchemaPropertyArrayOneOf]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>]

---


### UserSchemaPropertyMasterOverridePriorityList <a name="UserSchemaPropertyMasterOverridePriorityList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserSchemaPropertyMasterOverridePriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserSchemaPropertyMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]]

---


### UserSchemaPropertyMasterOverridePriorityOutputReference <a name="UserSchemaPropertyMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserSchemaPropertyMasterOverridePriority]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>]

---


### UserSchemaPropertyOneOfList <a name="UserSchemaPropertyOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserSchemaPropertyOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]]

---


### UserSchemaPropertyOneOfOutputReference <a name="UserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import user_schema_property

userSchemaProperty.UserSchemaPropertyOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserSchemaPropertyOneOf]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>]

---



