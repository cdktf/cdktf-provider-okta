# `okta_app_user_schema`

Refer to the Terraform Registory for docs: [`okta_app_user_schema`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema).

# `appUserSchema` Submodule <a name="`appUserSchema` Submodule" id="@cdktf/provider-okta.appUserSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchema <a name="AppUserSchema" id="@cdktf/provider-okta.appUserSchema.AppUserSchema"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema okta_app_user_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchema(
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
  array_one_of: typing.Union[IResolvable, typing.List[AppUserSchemaArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[AppUserSchemaOneOf]] = None,
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
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#app_id AppUserSchema#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.arrayType">array_type</a></code> | <code>str</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.description">description</a></code> | <code>str</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.enum">enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.externalName">external_name</a></code> | <code>str</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.externalNamespace">external_namespace</a></code> | <code>str</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#id AppUserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#scope AppUserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.union">union</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows to assign attribute's group priority. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.unique">unique</a></code> | <code>str</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | Custom subschema user type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#app_id AppUserSchema#app_id}.

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.index"></a>

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#index AppUserSchema#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.title"></a>

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#title AppUserSchema#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.type"></a>

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#type AppUserSchema#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.arrayEnum"></a>

- *Type:* typing.List[str]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#array_enum AppUserSchema#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.arrayOneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#array_one_of AppUserSchema#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.arrayType"></a>

- *Type:* str

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#array_type AppUserSchema#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.description"></a>

- *Type:* str

Custom Subschema description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#description AppUserSchema#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.enum"></a>

- *Type:* typing.List[str]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#enum AppUserSchema#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.externalName"></a>

- *Type:* str

Subschema external name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#external_name AppUserSchema#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.externalNamespace"></a>

- *Type:* str

Subschema external namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#external_namespace AppUserSchema#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#id AppUserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.master"></a>

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#master AppUserSchema#master}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#max_length AppUserSchema#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#min_length AppUserSchema#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.oneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#one_of AppUserSchema#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.permissions"></a>

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#permissions AppUserSchema#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#required AppUserSchema#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#scope AppUserSchema#scope}.

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.union"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows to assign attribute's group priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#union AppUserSchema#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.unique"></a>

- *Type:* str

Subschema unique restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#unique AppUserSchema#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.userType"></a>

- *Type:* str

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#user_type AppUserSchema#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf">put_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf">put_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum">reset_array_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf">reset_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType">reset_array_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace">reset_external_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster">reset_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf">reset_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion">reset_union</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique">reset_unique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_array_one_of` <a name="put_array_one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf"></a>

```python
def put_array_one_of(
  value: typing.Union[IResolvable, typing.List[AppUserSchemaArrayOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]

---

##### `put_one_of` <a name="put_one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf"></a>

```python
def put_one_of(
  value: typing.Union[IResolvable, typing.List[AppUserSchemaOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]

---

##### `reset_array_enum` <a name="reset_array_enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum"></a>

```python
def reset_array_enum() -> None
```

##### `reset_array_one_of` <a name="reset_array_one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf"></a>

```python
def reset_array_one_of() -> None
```

##### `reset_array_type` <a name="reset_array_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType"></a>

```python
def reset_array_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_external_namespace` <a name="reset_external_namespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace"></a>

```python
def reset_external_namespace() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master` <a name="reset_master" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster"></a>

```python
def reset_master() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_one_of` <a name="reset_one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf"></a>

```python
def reset_one_of() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_union` <a name="reset_union" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion"></a>

```python
def reset_union() -> None
```

##### `reset_unique` <a name="reset_unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique"></a>

```python
def reset_unique() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchema.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf">array_one_of</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf">one_of</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput">array_enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput">array_one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput">array_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput">external_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput">master_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput">one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput">union_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput">unique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType">array_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace">external_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master">master</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union">union</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique">unique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `array_one_of`<sup>Required</sup> <a name="array_one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf"></a>

```python
array_one_of: AppUserSchemaArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a>

---

##### `one_of`<sup>Required</sup> <a name="one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf"></a>

```python
one_of: AppUserSchemaOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `array_enum_input`<sup>Optional</sup> <a name="array_enum_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput"></a>

```python
array_enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_one_of_input`<sup>Optional</sup> <a name="array_one_of_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput"></a>

```python
array_one_of_input: typing.Union[IResolvable, typing.List[AppUserSchemaArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]

---

##### `array_type_input`<sup>Optional</sup> <a name="array_type_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput"></a>

```python
array_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `external_namespace_input`<sup>Optional</sup> <a name="external_namespace_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput"></a>

```python
external_namespace_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `master_input`<sup>Optional</sup> <a name="master_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput"></a>

```python
master_input: str
```

- *Type:* str

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `one_of_input`<sup>Optional</sup> <a name="one_of_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput"></a>

```python
one_of_input: typing.Union[IResolvable, typing.List[AppUserSchemaOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `union_input`<sup>Optional</sup> <a name="union_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput"></a>

```python
union_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unique_input`<sup>Optional</sup> <a name="unique_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput"></a>

```python
unique_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `array_enum`<sup>Required</sup> <a name="array_enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_type`<sup>Required</sup> <a name="array_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `external_namespace`<sup>Required</sup> <a name="external_namespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master"></a>

```python
master: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `union`<sup>Required</sup> <a name="union" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union"></a>

```python
union: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique"></a>

```python
unique: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaArrayOneOf <a name="AppUserSchemaArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchemaArrayOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#const AppUserSchema#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#title AppUserSchema#title}

---

### AppUserSchemaConfig <a name="AppUserSchemaConfig" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchemaConfig(
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
  array_one_of: typing.Union[IResolvable, typing.List[AppUserSchemaArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[AppUserSchemaOneOf]] = None,
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
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#app_id AppUserSchema#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType">array_type</a></code> | <code>str</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description">description</a></code> | <code>str</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum">enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName">external_name</a></code> | <code>str</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace">external_namespace</a></code> | <code>str</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#id AppUserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#scope AppUserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union">union</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows to assign attribute's group priority. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique">unique</a></code> | <code>str</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType">user_type</a></code> | <code>str</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#app_id AppUserSchema#app_id}.

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index"></a>

```python
index: str
```

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#index AppUserSchema#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#title AppUserSchema#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#type AppUserSchema#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#array_enum AppUserSchema#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf"></a>

```python
array_one_of: typing.Union[IResolvable, typing.List[AppUserSchemaArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#array_one_of AppUserSchema#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#array_type AppUserSchema#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Custom Subschema description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#description AppUserSchema#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#enum AppUserSchema#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

Subschema external name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#external_name AppUserSchema#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

Subschema external namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#external_namespace AppUserSchema#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#id AppUserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master"></a>

```python
master: str
```

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#master AppUserSchema#master}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#max_length AppUserSchema#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#min_length AppUserSchema#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf"></a>

```python
one_of: typing.Union[IResolvable, typing.List[AppUserSchemaOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#one_of AppUserSchema#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#permissions AppUserSchema#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#required AppUserSchema#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#scope AppUserSchema#scope}.

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union"></a>

```python
union: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows to assign attribute's group priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#union AppUserSchema#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique"></a>

```python
unique: str
```

- *Type:* str

Subschema unique restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#unique AppUserSchema#unique}

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#user_type AppUserSchema#user_type}

---

### AppUserSchemaOneOf <a name="AppUserSchemaOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchemaOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#const AppUserSchema#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_user_schema#title AppUserSchema#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaArrayOneOfList <a name="AppUserSchemaArrayOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchemaArrayOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppUserSchemaArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppUserSchemaArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>]]

---


### AppUserSchemaArrayOneOfOutputReference <a name="AppUserSchemaArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchemaArrayOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppUserSchemaArrayOneOf, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>, cdktf.IResolvable]

---


### AppUserSchemaOneOfList <a name="AppUserSchemaOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchemaOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppUserSchemaOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppUserSchemaOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>]]

---


### AppUserSchemaOneOfOutputReference <a name="AppUserSchemaOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_user_schema

appUserSchema.AppUserSchemaOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppUserSchemaOneOf, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>, cdktf.IResolvable]

---



