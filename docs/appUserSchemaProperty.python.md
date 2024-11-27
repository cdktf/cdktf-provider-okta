# `appUserSchemaProperty` Submodule <a name="`appUserSchemaProperty` Submodule" id="@cdktf/provider-okta.appUserSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchemaProperty <a name="AppUserSchemaProperty" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property okta_app_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaProperty(
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
  array_enum: typing.List[str] = None,
  array_one_of: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyOneOf]] = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  scope: str = None,
  union: typing.Union[bool, IResolvable] = None,
  unique: str = None,
  user_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The Application's ID the user custom schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayType">array_type</a></code> | <code>str</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.enum">enum</a></code> | <code>typing.List[str]</code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalName">external_name</a></code> | <code>str</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalNamespace">external_namespace</a></code> | <code>str</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.master">master</a></code> | <code>str</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>str</code> | determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.union">union</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.unique">unique</a></code> | <code>str</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | User type ID. By default, it is `default`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.appId"></a>

- *Type:* str

The Application's ID the user custom schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#app_id AppUserSchemaProperty#app_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.index"></a>

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#index AppUserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.title"></a>

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.type"></a>

- *Type:* str

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#type AppUserSchemaProperty#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayEnum"></a>

- *Type:* typing.List[str]

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#array_enum AppUserSchemaProperty#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayOneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#array_one_of AppUserSchemaProperty#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayType"></a>

- *Type:* str

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#array_type AppUserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.description"></a>

- *Type:* str

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#description AppUserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.enum"></a>

- *Type:* typing.List[str]

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#enum AppUserSchemaProperty#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalName"></a>

- *Type:* str

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#external_name AppUserSchemaProperty#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalNamespace"></a>

- *Type:* str

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#external_namespace AppUserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.master"></a>

- *Type:* str

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#master AppUserSchemaProperty#master}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#max_length AppUserSchemaProperty#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#min_length AppUserSchemaProperty#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.oneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#one_of AppUserSchemaProperty#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.permissions"></a>

- *Type:* str

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#permissions AppUserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#required AppUserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* str

determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level.

Default value is `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#scope AppUserSchemaProperty#scope}

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.union"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`.

Can not be set to `true` if `scope` is set to `SELF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#union AppUserSchemaProperty#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.unique"></a>

- *Type:* str

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#unique AppUserSchemaProperty#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.userType"></a>

- *Type:* str

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#user_type AppUserSchemaProperty#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf">put_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf">put_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum">reset_array_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf">reset_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType">reset_array_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace">reset_external_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster">reset_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf">reset_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion">reset_union</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique">reset_unique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_array_one_of` <a name="put_array_one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf"></a>

```python
def put_array_one_of(
  value: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyArrayOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]

---

##### `put_one_of` <a name="put_one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf"></a>

```python
def put_one_of(
  value: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]

---

##### `reset_array_enum` <a name="reset_array_enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum"></a>

```python
def reset_array_enum() -> None
```

##### `reset_array_one_of` <a name="reset_array_one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf"></a>

```python
def reset_array_one_of() -> None
```

##### `reset_array_type` <a name="reset_array_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType"></a>

```python
def reset_array_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_external_namespace` <a name="reset_external_namespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace"></a>

```python
def reset_external_namespace() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master` <a name="reset_master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster"></a>

```python
def reset_master() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_one_of` <a name="reset_one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf"></a>

```python
def reset_one_of() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_union` <a name="reset_union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion"></a>

```python
def reset_union() -> None
```

##### `reset_unique` <a name="reset_unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique"></a>

```python
def reset_unique() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppUserSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaProperty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaProperty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaProperty.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaProperty.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppUserSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppUserSchemaProperty to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppUserSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppUserSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf">array_one_of</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf">one_of</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput">array_enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput">array_one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput">array_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput">external_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput">master_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput">one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput">union_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput">unique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType">array_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace">external_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master">master</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union">union</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique">unique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `array_one_of`<sup>Required</sup> <a name="array_one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf"></a>

```python
array_one_of: AppUserSchemaPropertyArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a>

---

##### `one_of`<sup>Required</sup> <a name="one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf"></a>

```python
one_of: AppUserSchemaPropertyOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `array_enum_input`<sup>Optional</sup> <a name="array_enum_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput"></a>

```python
array_enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_one_of_input`<sup>Optional</sup> <a name="array_one_of_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput"></a>

```python
array_one_of_input: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]

---

##### `array_type_input`<sup>Optional</sup> <a name="array_type_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput"></a>

```python
array_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `external_namespace_input`<sup>Optional</sup> <a name="external_namespace_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput"></a>

```python
external_namespace_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `master_input`<sup>Optional</sup> <a name="master_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput"></a>

```python
master_input: str
```

- *Type:* str

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `one_of_input`<sup>Optional</sup> <a name="one_of_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput"></a>

```python
one_of_input: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `union_input`<sup>Optional</sup> <a name="union_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput"></a>

```python
union_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unique_input`<sup>Optional</sup> <a name="unique_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput"></a>

```python
unique_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `array_enum`<sup>Required</sup> <a name="array_enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_type`<sup>Required</sup> <a name="array_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `external_namespace`<sup>Required</sup> <a name="external_namespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master"></a>

```python
master: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `union`<sup>Required</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union"></a>

```python
union: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique"></a>

```python
unique: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaPropertyArrayOneOf <a name="AppUserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const">const</a></code> | <code>str</code> | Value mapping to member of `array_enum`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title">title</a></code> | <code>str</code> | Display name for the enum value. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Value mapping to member of `array_enum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Display name for the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

### AppUserSchemaPropertyConfig <a name="AppUserSchemaPropertyConfig" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaPropertyConfig(
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
  array_enum: typing.List[str] = None,
  array_one_of: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyOneOf]] = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  scope: str = None,
  union: typing.Union[bool, IResolvable] = None,
  unique: str = None,
  user_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId">app_id</a></code> | <code>str</code> | The Application's ID the user custom schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type">type</a></code> | <code>str</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType">array_type</a></code> | <code>str</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description">description</a></code> | <code>str</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum">enum</a></code> | <code>typing.List[str]</code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName">external_name</a></code> | <code>str</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace">external_namespace</a></code> | <code>str</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master">master</a></code> | <code>str</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>str</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope">scope</a></code> | <code>str</code> | determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union">union</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique">unique</a></code> | <code>str</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType">user_type</a></code> | <code>str</code> | User type ID. By default, it is `default`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The Application's ID the user custom schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#app_id AppUserSchemaProperty#app_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index"></a>

```python
index: str
```

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#index AppUserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#type AppUserSchemaProperty#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#array_enum AppUserSchemaProperty#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf"></a>

```python
array_one_of: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#array_one_of AppUserSchemaProperty#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#array_type AppUserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#description AppUserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#enum AppUserSchemaProperty#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#external_name AppUserSchemaProperty#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#external_namespace AppUserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master"></a>

```python
master: str
```

- *Type:* str

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#master AppUserSchemaProperty#master}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#max_length AppUserSchemaProperty#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#min_length AppUserSchemaProperty#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf"></a>

```python
one_of: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#one_of AppUserSchemaProperty#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#permissions AppUserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#required AppUserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level.

Default value is `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#scope AppUserSchemaProperty#scope}

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union"></a>

```python
union: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`.

Can not be set to `true` if `scope` is set to `SELF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#union AppUserSchemaProperty#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique"></a>

```python
unique: str
```

- *Type:* str

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#unique AppUserSchemaProperty#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#user_type AppUserSchemaProperty#user_type}

---

### AppUserSchemaPropertyOneOf <a name="AppUserSchemaPropertyOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaPropertyOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaPropertyArrayOneOfList <a name="AppUserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppUserSchemaPropertyArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]]

---


### AppUserSchemaPropertyArrayOneOfOutputReference <a name="AppUserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppUserSchemaPropertyArrayOneOf]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>]

---


### AppUserSchemaPropertyOneOfList <a name="AppUserSchemaPropertyOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaPropertyOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppUserSchemaPropertyOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppUserSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]]

---


### AppUserSchemaPropertyOneOfOutputReference <a name="AppUserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema_property

appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppUserSchemaPropertyOneOf]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>]

---



