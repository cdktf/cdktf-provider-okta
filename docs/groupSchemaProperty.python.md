# `okta_group_schema_property`

Refer to the Terraform Registory for docs: [`okta_group_schema_property`](https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property).

# `groupSchemaProperty` Submodule <a name="`groupSchemaProperty` Submodule" id="@cdktf/provider-okta.groupSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupSchemaProperty <a name="GroupSchemaProperty" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property okta_group_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaProperty(
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
  array_one_of: typing.Union[IResolvable, typing.List[GroupSchemaPropertyArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  master_override_priority: typing.Union[IResolvable, typing.List[GroupSchemaPropertyMasterOverridePriority]] = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[GroupSchemaPropertyOneOf]] = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  scope: str = None,
  unique: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.arrayType">array_type</a></code> | <code>str</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.description">description</a></code> | <code>str</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.enum">enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.externalName">external_name</a></code> | <code>str</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.externalNamespace">external_namespace</a></code> | <code>str</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#id GroupSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.masterOverridePriority">master_override_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#scope GroupSchemaProperty#scope}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.unique">unique</a></code> | <code>str</code> | Subschema unique restriction. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.index"></a>

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#index GroupSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.title"></a>

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#title GroupSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.type"></a>

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#type GroupSchemaProperty#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.arrayEnum"></a>

- *Type:* typing.List[str]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#array_enum GroupSchemaProperty#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.arrayOneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#array_one_of GroupSchemaProperty#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.arrayType"></a>

- *Type:* str

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#array_type GroupSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.description"></a>

- *Type:* str

Custom Subschema description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#description GroupSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.enum"></a>

- *Type:* typing.List[str]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#enum GroupSchemaProperty#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.externalName"></a>

- *Type:* str

Subschema external name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#external_name GroupSchemaProperty#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.externalNamespace"></a>

- *Type:* str

Subschema external namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#external_namespace GroupSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#id GroupSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.master"></a>

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#master GroupSchemaProperty#master}

---

##### `master_override_priority`<sup>Optional</sup> <a name="master_override_priority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.masterOverridePriority"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#master_override_priority GroupSchemaProperty#master_override_priority}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#max_length GroupSchemaProperty#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#min_length GroupSchemaProperty#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.oneOf"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#one_of GroupSchemaProperty#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.permissions"></a>

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#permissions GroupSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#required GroupSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#scope GroupSchemaProperty#scope}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.Initializer.parameter.unique"></a>

- *Type:* str

Subschema unique restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#unique GroupSchemaProperty#unique}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putArrayOneOf">put_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putMasterOverridePriority">put_master_override_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putOneOf">put_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayEnum">reset_array_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayOneOf">reset_array_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayType">reset_array_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalNamespace">reset_external_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaster">reset_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMasterOverridePriority">reset_master_override_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOneOf">reset_one_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetUnique">reset_unique</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_array_one_of` <a name="put_array_one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putArrayOneOf"></a>

```python
def put_array_one_of(
  value: typing.Union[IResolvable, typing.List[GroupSchemaPropertyArrayOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]

---

##### `put_master_override_priority` <a name="put_master_override_priority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putMasterOverridePriority"></a>

```python
def put_master_override_priority(
  value: typing.Union[IResolvable, typing.List[GroupSchemaPropertyMasterOverridePriority]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putMasterOverridePriority.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]

---

##### `put_one_of` <a name="put_one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putOneOf"></a>

```python
def put_one_of(
  value: typing.Union[IResolvable, typing.List[GroupSchemaPropertyOneOf]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]

---

##### `reset_array_enum` <a name="reset_array_enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayEnum"></a>

```python
def reset_array_enum() -> None
```

##### `reset_array_one_of` <a name="reset_array_one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayOneOf"></a>

```python
def reset_array_one_of() -> None
```

##### `reset_array_type` <a name="reset_array_type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetArrayType"></a>

```python
def reset_array_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_external_namespace` <a name="reset_external_namespace" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetExternalNamespace"></a>

```python
def reset_external_namespace() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_master` <a name="reset_master" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaster"></a>

```python
def reset_master() -> None
```

##### `reset_master_override_priority` <a name="reset_master_override_priority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMasterOverridePriority"></a>

```python
def reset_master_override_priority() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_one_of` <a name="reset_one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetOneOf"></a>

```python
def reset_one_of() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_unique` <a name="reset_unique" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.resetUnique"></a>

```python
def reset_unique() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaProperty.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaProperty.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaProperty.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaProperty.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupSchemaProperty to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOf">array_one_of</a></code> | <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList">GroupSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriority">master_override_priority</a></code> | <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList">GroupSchemaPropertyMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOf">one_of</a></code> | <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList">GroupSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnumInput">array_enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOfInput">array_one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayTypeInput">array_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespaceInput">external_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.indexInput">index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterInput">master_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriorityInput">master_override_priority_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOfInput">one_of_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.uniqueInput">unique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayType">array_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespace">external_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.index">index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.master">master</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.unique">unique</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `array_one_of`<sup>Required</sup> <a name="array_one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOf"></a>

```python
array_one_of: GroupSchemaPropertyArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList">GroupSchemaPropertyArrayOneOfList</a>

---

##### `master_override_priority`<sup>Required</sup> <a name="master_override_priority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriority"></a>

```python
master_override_priority: GroupSchemaPropertyMasterOverridePriorityList
```

- *Type:* <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList">GroupSchemaPropertyMasterOverridePriorityList</a>

---

##### `one_of`<sup>Required</sup> <a name="one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOf"></a>

```python
one_of: GroupSchemaPropertyOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList">GroupSchemaPropertyOneOfList</a>

---

##### `array_enum_input`<sup>Optional</sup> <a name="array_enum_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnumInput"></a>

```python
array_enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_one_of_input`<sup>Optional</sup> <a name="array_one_of_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayOneOfInput"></a>

```python
array_one_of_input: typing.Union[IResolvable, typing.List[GroupSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]

---

##### `array_type_input`<sup>Optional</sup> <a name="array_type_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayTypeInput"></a>

```python
array_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `external_namespace_input`<sup>Optional</sup> <a name="external_namespace_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespaceInput"></a>

```python
external_namespace_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.indexInput"></a>

```python
index_input: str
```

- *Type:* str

---

##### `master_input`<sup>Optional</sup> <a name="master_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterInput"></a>

```python
master_input: str
```

- *Type:* str

---

##### `master_override_priority_input`<sup>Optional</sup> <a name="master_override_priority_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.masterOverridePriorityInput"></a>

```python
master_override_priority_input: typing.Union[IResolvable, typing.List[GroupSchemaPropertyMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `one_of_input`<sup>Optional</sup> <a name="one_of_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.oneOfInput"></a>

```python
one_of_input: typing.Union[IResolvable, typing.List[GroupSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_input`<sup>Optional</sup> <a name="unique_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.uniqueInput"></a>

```python
unique_input: str
```

- *Type:* str

---

##### `array_enum`<sup>Required</sup> <a name="array_enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `array_type`<sup>Required</sup> <a name="array_type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `external_namespace`<sup>Required</sup> <a name="external_namespace" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.index"></a>

```python
index: str
```

- *Type:* str

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.master"></a>

```python
master: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.unique"></a>

```python
unique: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaProperty.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupSchemaPropertyArrayOneOf <a name="GroupSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyArrayOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#const GroupSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#title GroupSchemaProperty#title}

---

### GroupSchemaPropertyConfig <a name="GroupSchemaPropertyConfig" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyConfig(
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
  array_one_of: typing.Union[IResolvable, typing.List[GroupSchemaPropertyArrayOneOf]] = None,
  array_type: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  external_name: str = None,
  external_namespace: str = None,
  id: str = None,
  master: str = None,
  master_override_priority: typing.Union[IResolvable, typing.List[GroupSchemaPropertyMasterOverridePriority]] = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  one_of: typing.Union[IResolvable, typing.List[GroupSchemaPropertyOneOf]] = None,
  permissions: str = None,
  required: typing.Union[bool, IResolvable] = None,
  scope: str = None,
  unique: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.index">index</a></code> | <code>str</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.title">title</a></code> | <code>str</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.type">type</a></code> | <code>str</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayEnum">array_enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayOneOf">array_one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayType">array_type</a></code> | <code>str</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.description">description</a></code> | <code>str</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.enum">enum</a></code> | <code>typing.List[str]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalName">external_name</a></code> | <code>str</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalNamespace">external_namespace</a></code> | <code>str</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#id GroupSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.master">master</a></code> | <code>str</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.masterOverridePriority">master_override_priority</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.oneOf">one_of</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>str</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#scope GroupSchemaProperty#scope}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.unique">unique</a></code> | <code>str</code> | Subschema unique restriction. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.index"></a>

```python
index: str
```

- *Type:* str

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#index GroupSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#title GroupSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#type GroupSchemaProperty#type}

---

##### `array_enum`<sup>Optional</sup> <a name="array_enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayEnum"></a>

```python
array_enum: typing.List[str]
```

- *Type:* typing.List[str]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#array_enum GroupSchemaProperty#array_enum}

---

##### `array_one_of`<sup>Optional</sup> <a name="array_one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayOneOf"></a>

```python
array_one_of: typing.Union[IResolvable, typing.List[GroupSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#array_one_of GroupSchemaProperty#array_one_of}

---

##### `array_type`<sup>Optional</sup> <a name="array_type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.arrayType"></a>

```python
array_type: str
```

- *Type:* str

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#array_type GroupSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Custom Subschema description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#description GroupSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#enum GroupSchemaProperty#enum}

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

Subschema external name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#external_name GroupSchemaProperty#external_name}

---

##### `external_namespace`<sup>Optional</sup> <a name="external_namespace" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.externalNamespace"></a>

```python
external_namespace: str
```

- *Type:* str

Subschema external namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#external_namespace GroupSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#id GroupSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.master"></a>

```python
master: str
```

- *Type:* str

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#master GroupSchemaProperty#master}

---

##### `master_override_priority`<sup>Optional</sup> <a name="master_override_priority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.masterOverridePriority"></a>

```python
master_override_priority: typing.Union[IResolvable, typing.List[GroupSchemaPropertyMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#master_override_priority GroupSchemaProperty#master_override_priority}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#max_length GroupSchemaProperty#max_length}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#min_length GroupSchemaProperty#min_length}

---

##### `one_of`<sup>Optional</sup> <a name="one_of" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.oneOf"></a>

```python
one_of: typing.Union[IResolvable, typing.List[GroupSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#one_of GroupSchemaProperty#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#permissions GroupSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#required GroupSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#scope GroupSchemaProperty#scope}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyConfig.property.unique"></a>

```python
unique: str
```

- *Type:* str

Subschema unique restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#unique GroupSchemaProperty#unique}

---

### GroupSchemaPropertyMasterOverridePriority <a name="GroupSchemaPropertyMasterOverridePriority" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority(
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#value GroupSchemaProperty#value}. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#type GroupSchemaProperty#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#value GroupSchemaProperty#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#type GroupSchemaProperty#type}.

---

### GroupSchemaPropertyOneOf <a name="GroupSchemaPropertyOneOf" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyOneOf(
  const: str,
  title: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.const">const</a></code> | <code>str</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.title">title</a></code> | <code>str</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.const"></a>

```python
const: str
```

- *Type:* str

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#const GroupSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf.property.title"></a>

```python
title: str
```

- *Type:* str

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/group_schema_property#title GroupSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupSchemaPropertyArrayOneOfList <a name="GroupSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyArrayOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupSchemaPropertyArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GroupSchemaPropertyArrayOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]]

---


### GroupSchemaPropertyArrayOneOfOutputReference <a name="GroupSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupSchemaPropertyArrayOneOf]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyArrayOneOf">GroupSchemaPropertyArrayOneOf</a>]

---


### GroupSchemaPropertyMasterOverridePriorityList <a name="GroupSchemaPropertyMasterOverridePriorityList" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupSchemaPropertyMasterOverridePriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GroupSchemaPropertyMasterOverridePriority]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]]

---


### GroupSchemaPropertyMasterOverridePriorityOutputReference <a name="GroupSchemaPropertyMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupSchemaPropertyMasterOverridePriority]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyMasterOverridePriority">GroupSchemaPropertyMasterOverridePriority</a>]

---


### GroupSchemaPropertyOneOfList <a name="GroupSchemaPropertyOneOfList" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyOneOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupSchemaPropertyOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GroupSchemaPropertyOneOf]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]]

---


### GroupSchemaPropertyOneOfOutputReference <a name="GroupSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_schema_property

groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.constInput">const_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.const">const</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `const_input`<sup>Optional</sup> <a name="const_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.constInput"></a>

```python
const_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.const"></a>

```python
const: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupSchemaPropertyOneOf]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.groupSchemaProperty.GroupSchemaPropertyOneOf">GroupSchemaPropertyOneOf</a>]

---



