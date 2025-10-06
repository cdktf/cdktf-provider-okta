# `userSchemaProperty` Submodule <a name="`userSchemaProperty` Submodule" id="@cdktf/provider-okta.userSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSchemaProperty <a name="UserSchemaProperty" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property okta_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaProperty;

UserSchemaProperty.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .index(java.lang.String)
    .title(java.lang.String)
    .type(java.lang.String)
//  .arrayEnum(java.util.List<java.lang.String>)
//  .arrayOneOf(IResolvable|java.util.List<UserSchemaPropertyArrayOneOf>)
//  .arrayType(java.lang.String)
//  .description(java.lang.String)
//  .enum(java.util.List<java.lang.String>)
//  .externalName(java.lang.String)
//  .externalNamespace(java.lang.String)
//  .id(java.lang.String)
//  .master(java.lang.String)
//  .masterOverridePriority(IResolvable|java.util.List<UserSchemaPropertyMasterOverridePriority>)
//  .maxLength(java.lang.Number)
//  .minLength(java.lang.Number)
//  .oneOf(IResolvable|java.util.List<UserSchemaPropertyOneOf>)
//  .pattern(java.lang.String)
//  .permissions(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .scope(java.lang.String)
//  .unique(java.lang.String)
//  .userType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.index">index</a></code> | <code>java.lang.String</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayEnum">arrayEnum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayOneOf">arrayOneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>></code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayType">arrayType</a></code> | <code>java.lang.String</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalName">externalName</a></code> | <code>java.lang.String</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalNamespace">externalNamespace</a></code> | <code>java.lang.String</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#id UserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.master">master</a></code> | <code>java.lang.String</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.masterOverridePriority">masterOverridePriority</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>></code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.minLength">minLength</a></code> | <code>java.lang.Number</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.oneOf">oneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>></code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.permissions">permissions</a></code> | <code>java.lang.String</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.unique">unique</a></code> | <code>java.lang.String</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.userType">userType</a></code> | <code>java.lang.String</code> | User type ID. By default, it is `default`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.index"></a>

- *Type:* java.lang.String

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#index UserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#type UserSchemaProperty#type}

---

##### `arrayEnum`<sup>Optional</sup> <a name="arrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayEnum"></a>

- *Type:* java.util.List<java.lang.String>

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#array_enum UserSchemaProperty#array_enum}

---

##### `arrayOneOf`<sup>Optional</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayOneOf"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>>

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#array_one_of UserSchemaProperty#array_one_of}

---

##### `arrayType`<sup>Optional</sup> <a name="arrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.arrayType"></a>

- *Type:* java.lang.String

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#array_type UserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#description UserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.enum"></a>

- *Type:* java.util.List<java.lang.String>

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#enum UserSchemaProperty#enum}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalName"></a>

- *Type:* java.lang.String

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#external_name UserSchemaProperty#external_name}

---

##### `externalNamespace`<sup>Optional</sup> <a name="externalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.externalNamespace"></a>

- *Type:* java.lang.String

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#external_namespace UserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#id UserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.master"></a>

- *Type:* java.lang.String

Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#master UserSchemaProperty#master}

---

##### `masterOverridePriority`<sup>Optional</sup> <a name="masterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.masterOverridePriority"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>>

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#master_override_priority UserSchemaProperty#master_override_priority}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.maxLength"></a>

- *Type:* java.lang.Number

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#max_length UserSchemaProperty#max_length}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.minLength"></a>

- *Type:* java.lang.Number

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#min_length UserSchemaProperty#min_length}

---

##### `oneOf`<sup>Optional</sup> <a name="oneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.oneOf"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>>

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#one_of UserSchemaProperty#one_of}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#pattern UserSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.permissions"></a>

- *Type:* java.lang.String

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#permissions UserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.required"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#required UserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#scope UserSchemaProperty#scope}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.unique"></a>

- *Type:* java.lang.String

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#unique UserSchemaProperty#unique}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.userType"></a>

- *Type:* java.lang.String

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#user_type UserSchemaProperty#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf">putArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority">putMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf">putOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum">resetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf">resetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType">resetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace">resetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority">resetMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf">resetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique">resetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArrayOneOf` <a name="putArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf"></a>

```java
public void putArrayOneOf(IResolvable|java.util.List<UserSchemaPropertyArrayOneOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>>

---

##### `putMasterOverridePriority` <a name="putMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority"></a>

```java
public void putMasterOverridePriority(IResolvable|java.util.List<UserSchemaPropertyMasterOverridePriority> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>>

---

##### `putOneOf` <a name="putOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf"></a>

```java
public void putOneOf(IResolvable|java.util.List<UserSchemaPropertyOneOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>>

---

##### `resetArrayEnum` <a name="resetArrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum"></a>

```java
public void resetArrayEnum()
```

##### `resetArrayOneOf` <a name="resetArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf"></a>

```java
public void resetArrayOneOf()
```

##### `resetArrayType` <a name="resetArrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType"></a>

```java
public void resetArrayType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum"></a>

```java
public void resetEnum()
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName"></a>

```java
public void resetExternalName()
```

##### `resetExternalNamespace` <a name="resetExternalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace"></a>

```java
public void resetExternalNamespace()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId"></a>

```java
public void resetId()
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster"></a>

```java
public void resetMaster()
```

##### `resetMasterOverridePriority` <a name="resetMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority"></a>

```java
public void resetMasterOverridePriority()
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength"></a>

```java
public void resetMaxLength()
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength"></a>

```java
public void resetMinLength()
```

##### `resetOneOf` <a name="resetOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf"></a>

```java
public void resetOneOf()
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope"></a>

```java
public void resetScope()
```

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique"></a>

```java
public void resetUnique()
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType"></a>

```java
public void resetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaProperty;

UserSchemaProperty.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaProperty;

UserSchemaProperty.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaProperty;

UserSchemaProperty.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaProperty;

UserSchemaProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UserSchemaProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a UserSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UserSchemaProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UserSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the UserSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf">arrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority">masterOverridePriority</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf">oneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput">arrayEnumInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput">arrayOneOfInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput">arrayTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput">enumInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput">externalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput">externalNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput">masterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput">masterOverridePriorityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput">maxLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput">oneOfInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput">permissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput">uniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput">userTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum">arrayEnum</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType">arrayType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName">externalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace">externalNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master">master</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique">unique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arrayOneOf`<sup>Required</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf"></a>

```java
public UserSchemaPropertyArrayOneOfList getArrayOneOf();
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a>

---

##### `masterOverridePriority`<sup>Required</sup> <a name="masterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority"></a>

```java
public UserSchemaPropertyMasterOverridePriorityList getMasterOverridePriority();
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a>

---

##### `oneOf`<sup>Required</sup> <a name="oneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf"></a>

```java
public UserSchemaPropertyOneOfList getOneOf();
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a>

---

##### `arrayEnumInput`<sup>Optional</sup> <a name="arrayEnumInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput"></a>

```java
public java.util.List<java.lang.String> getArrayEnumInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arrayOneOfInput`<sup>Optional</sup> <a name="arrayOneOfInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyArrayOneOf> getArrayOneOfInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>>

---

##### `arrayTypeInput`<sup>Optional</sup> <a name="arrayTypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput"></a>

```java
public java.lang.String getArrayTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput"></a>

```java
public java.util.List<java.lang.String> getEnumInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput"></a>

```java
public java.lang.String getExternalNameInput();
```

- *Type:* java.lang.String

---

##### `externalNamespaceInput`<sup>Optional</sup> <a name="externalNamespaceInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput"></a>

```java
public java.lang.String getExternalNamespaceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput"></a>

```java
public java.lang.String getMasterInput();
```

- *Type:* java.lang.String

---

##### `masterOverridePriorityInput`<sup>Optional</sup> <a name="masterOverridePriorityInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyMasterOverridePriority> getMasterOverridePriorityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>>

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput"></a>

```java
public java.lang.Number getMaxLengthInput();
```

- *Type:* java.lang.Number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput"></a>

```java
public java.lang.Number getMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `oneOfInput`<sup>Optional</sup> <a name="oneOfInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyOneOf> getOneOfInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>>

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput"></a>

```java
public java.lang.String getPermissionsInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput"></a>

```java
public java.lang.String getUniqueInput();
```

- *Type:* java.lang.String

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput"></a>

```java
public java.lang.String getUserTypeInput();
```

- *Type:* java.lang.String

---

##### `arrayEnum`<sup>Required</sup> <a name="arrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum"></a>

```java
public java.util.List<java.lang.String> getArrayEnum();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arrayType`<sup>Required</sup> <a name="arrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType"></a>

```java
public java.lang.String getArrayType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

---

##### `externalNamespace`<sup>Required</sup> <a name="externalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace"></a>

```java
public java.lang.String getExternalNamespace();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master"></a>

```java
public java.lang.String getMaster();
```

- *Type:* java.lang.String

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique"></a>

```java
public java.lang.String getUnique();
```

- *Type:* java.lang.String

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserSchemaPropertyArrayOneOf <a name="UserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyArrayOneOf;

UserSchemaPropertyArrayOneOf.builder()
    .const(java.lang.String)
    .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const">const</a></code> | <code>java.lang.String</code> | Value mapping to member of `array_enum`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title">title</a></code> | <code>java.lang.String</code> | Display name for the enum value. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

Value mapping to member of `array_enum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Display name for the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

### UserSchemaPropertyConfig <a name="UserSchemaPropertyConfig" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyConfig;

UserSchemaPropertyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .index(java.lang.String)
    .title(java.lang.String)
    .type(java.lang.String)
//  .arrayEnum(java.util.List<java.lang.String>)
//  .arrayOneOf(IResolvable|java.util.List<UserSchemaPropertyArrayOneOf>)
//  .arrayType(java.lang.String)
//  .description(java.lang.String)
//  .enum(java.util.List<java.lang.String>)
//  .externalName(java.lang.String)
//  .externalNamespace(java.lang.String)
//  .id(java.lang.String)
//  .master(java.lang.String)
//  .masterOverridePriority(IResolvable|java.util.List<UserSchemaPropertyMasterOverridePriority>)
//  .maxLength(java.lang.Number)
//  .minLength(java.lang.Number)
//  .oneOf(IResolvable|java.util.List<UserSchemaPropertyOneOf>)
//  .pattern(java.lang.String)
//  .permissions(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .scope(java.lang.String)
//  .unique(java.lang.String)
//  .userType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index">index</a></code> | <code>java.lang.String</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title">title</a></code> | <code>java.lang.String</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum">arrayEnum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf">arrayOneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>></code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType">arrayType</a></code> | <code>java.lang.String</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName">externalName</a></code> | <code>java.lang.String</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace">externalNamespace</a></code> | <code>java.lang.String</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#id UserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master">master</a></code> | <code>java.lang.String</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority">masterOverridePriority</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>></code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf">oneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>></code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>java.lang.String</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique">unique</a></code> | <code>java.lang.String</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType">userType</a></code> | <code>java.lang.String</code> | User type ID. By default, it is `default`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#index UserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#type UserSchemaProperty#type}

---

##### `arrayEnum`<sup>Optional</sup> <a name="arrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum"></a>

```java
public java.util.List<java.lang.String> getArrayEnum();
```

- *Type:* java.util.List<java.lang.String>

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#array_enum UserSchemaProperty#array_enum}

---

##### `arrayOneOf`<sup>Optional</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyArrayOneOf> getArrayOneOf();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>>

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#array_one_of UserSchemaProperty#array_one_of}

---

##### `arrayType`<sup>Optional</sup> <a name="arrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType"></a>

```java
public java.lang.String getArrayType();
```

- *Type:* java.lang.String

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#array_type UserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#description UserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#enum UserSchemaProperty#enum}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#external_name UserSchemaProperty#external_name}

---

##### `externalNamespace`<sup>Optional</sup> <a name="externalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace"></a>

```java
public java.lang.String getExternalNamespace();
```

- *Type:* java.lang.String

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#external_namespace UserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#id UserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master"></a>

```java
public java.lang.String getMaster();
```

- *Type:* java.lang.String

Master priority for the user schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#master UserSchemaProperty#master}

---

##### `masterOverridePriority`<sup>Optional</sup> <a name="masterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyMasterOverridePriority> getMasterOverridePriority();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>>

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#master_override_priority UserSchemaProperty#master_override_priority}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#max_length UserSchemaProperty#max_length}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#min_length UserSchemaProperty#min_length}

---

##### `oneOf`<sup>Optional</sup> <a name="oneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyOneOf> getOneOf();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>>

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#one_of UserSchemaProperty#one_of}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#pattern UserSchemaProperty#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#permissions UserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#required UserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

determines whether an app user attribute can be set at the Individual or Group Level. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#scope UserSchemaProperty#scope}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique"></a>

```java
public java.lang.String getUnique();
```

- *Type:* java.lang.String

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#unique UserSchemaProperty#unique}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#user_type UserSchemaProperty#user_type}

---

### UserSchemaPropertyMasterOverridePriority <a name="UserSchemaPropertyMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyMasterOverridePriority;

UserSchemaPropertyMasterOverridePriority.builder()
    .value(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#value UserSchemaProperty#value}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#type UserSchemaProperty#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#value UserSchemaProperty#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#type UserSchemaProperty#type}.

---

### UserSchemaPropertyOneOf <a name="UserSchemaPropertyOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyOneOf;

UserSchemaPropertyOneOf.builder()
    .const(java.lang.String)
    .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const">const</a></code> | <code>java.lang.String</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title">title</a></code> | <code>java.lang.String</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### UserSchemaPropertyArrayOneOfList <a name="UserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyArrayOneOfList;

new UserSchemaPropertyArrayOneOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get"></a>

```java
public UserSchemaPropertyArrayOneOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyArrayOneOf> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>>

---


### UserSchemaPropertyArrayOneOfOutputReference <a name="UserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyArrayOneOfOutputReference;

new UserSchemaPropertyArrayOneOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput">constInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const">const</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```java
public java.lang.String getConstInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```java
public IResolvable|UserSchemaPropertyArrayOneOf getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf">UserSchemaPropertyArrayOneOf</a>

---


### UserSchemaPropertyMasterOverridePriorityList <a name="UserSchemaPropertyMasterOverridePriorityList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyMasterOverridePriorityList;

new UserSchemaPropertyMasterOverridePriorityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get"></a>

```java
public UserSchemaPropertyMasterOverridePriorityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyMasterOverridePriority> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>>

---


### UserSchemaPropertyMasterOverridePriorityOutputReference <a name="UserSchemaPropertyMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyMasterOverridePriorityOutputReference;

new UserSchemaPropertyMasterOverridePriorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue"></a>

```java
public IResolvable|UserSchemaPropertyMasterOverridePriority getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority">UserSchemaPropertyMasterOverridePriority</a>

---


### UserSchemaPropertyOneOfList <a name="UserSchemaPropertyOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyOneOfList;

new UserSchemaPropertyOneOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get"></a>

```java
public UserSchemaPropertyOneOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue"></a>

```java
public IResolvable|java.util.List<UserSchemaPropertyOneOf> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>>

---


### UserSchemaPropertyOneOfOutputReference <a name="UserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user_schema_property.UserSchemaPropertyOneOfOutputReference;

new UserSchemaPropertyOneOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput">constInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const">const</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```java
public java.lang.String getConstInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```java
public IResolvable|UserSchemaPropertyOneOf getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf">UserSchemaPropertyOneOf</a>

---



