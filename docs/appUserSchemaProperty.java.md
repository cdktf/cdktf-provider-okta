# `appUserSchemaProperty` Submodule <a name="`appUserSchemaProperty` Submodule" id="@cdktf/provider-okta.appUserSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchemaProperty <a name="AppUserSchemaProperty" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property okta_app_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaProperty;

AppUserSchemaProperty.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .index(java.lang.String)
    .title(java.lang.String)
    .type(java.lang.String)
//  .arrayEnum(java.util.List<java.lang.String>)
//  .arrayOneOf(IResolvable)
//  .arrayOneOf(java.util.List<AppUserSchemaPropertyArrayOneOf>)
//  .arrayType(java.lang.String)
//  .description(java.lang.String)
//  .enum(java.util.List<java.lang.String>)
//  .externalName(java.lang.String)
//  .externalNamespace(java.lang.String)
//  .id(java.lang.String)
//  .master(java.lang.String)
//  .maxLength(java.lang.Number)
//  .minLength(java.lang.Number)
//  .oneOf(IResolvable)
//  .oneOf(java.util.List<AppUserSchemaPropertyOneOf>)
//  .permissions(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .scope(java.lang.String)
//  .union(java.lang.Boolean)
//  .union(IResolvable)
//  .unique(java.lang.String)
//  .userType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The Application's ID the user custom schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.index">index</a></code> | <code>java.lang.String</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayEnum">arrayEnum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayOneOf">arrayOneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>></code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayType">arrayType</a></code> | <code>java.lang.String</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalName">externalName</a></code> | <code>java.lang.String</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalNamespace">externalNamespace</a></code> | <code>java.lang.String</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.master">master</a></code> | <code>java.lang.String</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.minLength">minLength</a></code> | <code>java.lang.Number</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.oneOf">oneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>></code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.permissions">permissions</a></code> | <code>java.lang.String</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.union">union</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.unique">unique</a></code> | <code>java.lang.String</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.userType">userType</a></code> | <code>java.lang.String</code> | User type ID. By default, it is `default`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The Application's ID the user custom schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#app_id AppUserSchemaProperty#app_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.index"></a>

- *Type:* java.lang.String

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#index AppUserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#type AppUserSchemaProperty#type}

---

##### `arrayEnum`<sup>Optional</sup> <a name="arrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayEnum"></a>

- *Type:* java.util.List<java.lang.String>

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#array_enum AppUserSchemaProperty#array_enum}

---

##### `arrayOneOf`<sup>Optional</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayOneOf"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>>

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#array_one_of AppUserSchemaProperty#array_one_of}

---

##### `arrayType`<sup>Optional</sup> <a name="arrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.arrayType"></a>

- *Type:* java.lang.String

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#array_type AppUserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#description AppUserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.enum"></a>

- *Type:* java.util.List<java.lang.String>

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#enum AppUserSchemaProperty#enum}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalName"></a>

- *Type:* java.lang.String

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#external_name AppUserSchemaProperty#external_name}

---

##### `externalNamespace`<sup>Optional</sup> <a name="externalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.externalNamespace"></a>

- *Type:* java.lang.String

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#external_namespace AppUserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.master"></a>

- *Type:* java.lang.String

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#master AppUserSchemaProperty#master}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.maxLength"></a>

- *Type:* java.lang.Number

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#max_length AppUserSchemaProperty#max_length}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.minLength"></a>

- *Type:* java.lang.Number

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#min_length AppUserSchemaProperty#min_length}

---

##### `oneOf`<sup>Optional</sup> <a name="oneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.oneOf"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>>

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#one_of AppUserSchemaProperty#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.permissions"></a>

- *Type:* java.lang.String

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#permissions AppUserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.required"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#required AppUserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level.

Default value is `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#scope AppUserSchemaProperty#scope}

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.union"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`.

Can not be set to `true` if `scope` is set to `SELF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#union AppUserSchemaProperty#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.unique"></a>

- *Type:* java.lang.String

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#unique AppUserSchemaProperty#unique}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.userType"></a>

- *Type:* java.lang.String

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#user_type AppUserSchemaProperty#user_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf">putArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf">putOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum">resetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf">resetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType">resetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace">resetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf">resetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion">resetUnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique">resetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArrayOneOf` <a name="putArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf"></a>

```java
public void putArrayOneOf(IResolvable OR java.util.List<AppUserSchemaPropertyArrayOneOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>>

---

##### `putOneOf` <a name="putOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf"></a>

```java
public void putOneOf(IResolvable OR java.util.List<AppUserSchemaPropertyOneOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>>

---

##### `resetArrayEnum` <a name="resetArrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum"></a>

```java
public void resetArrayEnum()
```

##### `resetArrayOneOf` <a name="resetArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf"></a>

```java
public void resetArrayOneOf()
```

##### `resetArrayType` <a name="resetArrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType"></a>

```java
public void resetArrayType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum"></a>

```java
public void resetEnum()
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName"></a>

```java
public void resetExternalName()
```

##### `resetExternalNamespace` <a name="resetExternalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace"></a>

```java
public void resetExternalNamespace()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId"></a>

```java
public void resetId()
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster"></a>

```java
public void resetMaster()
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength"></a>

```java
public void resetMaxLength()
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength"></a>

```java
public void resetMinLength()
```

##### `resetOneOf` <a name="resetOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf"></a>

```java
public void resetOneOf()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope"></a>

```java
public void resetScope()
```

##### `resetUnion` <a name="resetUnion" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion"></a>

```java
public void resetUnion()
```

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique"></a>

```java
public void resetUnique()
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType"></a>

```java
public void resetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppUserSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaProperty;

AppUserSchemaProperty.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaProperty;

AppUserSchemaProperty.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaProperty;

AppUserSchemaProperty.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaProperty;

AppUserSchemaProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppUserSchemaProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppUserSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppUserSchemaProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppUserSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppUserSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf">arrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf">oneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput">arrayEnumInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput">arrayOneOfInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput">arrayTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput">enumInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput">externalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput">externalNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput">indexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput">masterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput">maxLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput">oneOfInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput">permissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput">unionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput">uniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput">userTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum">arrayEnum</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType">arrayType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName">externalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace">externalNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index">index</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master">master</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union">union</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique">unique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arrayOneOf`<sup>Required</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf"></a>

```java
public AppUserSchemaPropertyArrayOneOfList getArrayOneOf();
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a>

---

##### `oneOf`<sup>Required</sup> <a name="oneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf"></a>

```java
public AppUserSchemaPropertyOneOfList getOneOf();
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `arrayEnumInput`<sup>Optional</sup> <a name="arrayEnumInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput"></a>

```java
public java.util.List<java.lang.String> getArrayEnumInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arrayOneOfInput`<sup>Optional</sup> <a name="arrayOneOfInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput"></a>

```java
public java.lang.Object getArrayOneOfInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>>

---

##### `arrayTypeInput`<sup>Optional</sup> <a name="arrayTypeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput"></a>

```java
public java.lang.String getArrayTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput"></a>

```java
public java.util.List<java.lang.String> getEnumInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput"></a>

```java
public java.lang.String getExternalNameInput();
```

- *Type:* java.lang.String

---

##### `externalNamespaceInput`<sup>Optional</sup> <a name="externalNamespaceInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput"></a>

```java
public java.lang.String getExternalNamespaceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput"></a>

```java
public java.lang.String getIndexInput();
```

- *Type:* java.lang.String

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput"></a>

```java
public java.lang.String getMasterInput();
```

- *Type:* java.lang.String

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput"></a>

```java
public java.lang.Number getMaxLengthInput();
```

- *Type:* java.lang.Number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput"></a>

```java
public java.lang.Number getMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `oneOfInput`<sup>Optional</sup> <a name="oneOfInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput"></a>

```java
public java.lang.Object getOneOfInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput"></a>

```java
public java.lang.String getPermissionsInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unionInput`<sup>Optional</sup> <a name="unionInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput"></a>

```java
public java.lang.Object getUnionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput"></a>

```java
public java.lang.String getUniqueInput();
```

- *Type:* java.lang.String

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput"></a>

```java
public java.lang.String getUserTypeInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `arrayEnum`<sup>Required</sup> <a name="arrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum"></a>

```java
public java.util.List<java.lang.String> getArrayEnum();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arrayType`<sup>Required</sup> <a name="arrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType"></a>

```java
public java.lang.String getArrayType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

---

##### `externalNamespace`<sup>Required</sup> <a name="externalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace"></a>

```java
public java.lang.String getExternalNamespace();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master"></a>

```java
public java.lang.String getMaster();
```

- *Type:* java.lang.String

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `union`<sup>Required</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union"></a>

```java
public java.lang.Object getUnion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique"></a>

```java
public java.lang.String getUnique();
```

- *Type:* java.lang.String

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaPropertyArrayOneOf <a name="AppUserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaPropertyArrayOneOf;

AppUserSchemaPropertyArrayOneOf.builder()
    .const(java.lang.String)
    .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const">const</a></code> | <code>java.lang.String</code> | Value mapping to member of `array_enum`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title">title</a></code> | <code>java.lang.String</code> | Display name for the enum value. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

Value mapping to member of `array_enum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Display name for the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

### AppUserSchemaPropertyConfig <a name="AppUserSchemaPropertyConfig" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaPropertyConfig;

AppUserSchemaPropertyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .index(java.lang.String)
    .title(java.lang.String)
    .type(java.lang.String)
//  .arrayEnum(java.util.List<java.lang.String>)
//  .arrayOneOf(IResolvable)
//  .arrayOneOf(java.util.List<AppUserSchemaPropertyArrayOneOf>)
//  .arrayType(java.lang.String)
//  .description(java.lang.String)
//  .enum(java.util.List<java.lang.String>)
//  .externalName(java.lang.String)
//  .externalNamespace(java.lang.String)
//  .id(java.lang.String)
//  .master(java.lang.String)
//  .maxLength(java.lang.Number)
//  .minLength(java.lang.Number)
//  .oneOf(IResolvable)
//  .oneOf(java.util.List<AppUserSchemaPropertyOneOf>)
//  .permissions(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .scope(java.lang.String)
//  .union(java.lang.Boolean)
//  .union(IResolvable)
//  .unique(java.lang.String)
//  .userType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The Application's ID the user custom schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index">index</a></code> | <code>java.lang.String</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title">title</a></code> | <code>java.lang.String</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum">arrayEnum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf">arrayOneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>></code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType">arrayType</a></code> | <code>java.lang.String</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName">externalName</a></code> | <code>java.lang.String</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace">externalNamespace</a></code> | <code>java.lang.String</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master">master</a></code> | <code>java.lang.String</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf">oneOf</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>></code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions">permissions</a></code> | <code>java.lang.String</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union">union</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique">unique</a></code> | <code>java.lang.String</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType">userType</a></code> | <code>java.lang.String</code> | User type ID. By default, it is `default`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The Application's ID the user custom schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#app_id AppUserSchemaProperty#app_id}

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index"></a>

```java
public java.lang.String getIndex();
```

- *Type:* java.lang.String

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#index AppUserSchemaProperty#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#type AppUserSchemaProperty#type}

---

##### `arrayEnum`<sup>Optional</sup> <a name="arrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum"></a>

```java
public java.util.List<java.lang.String> getArrayEnum();
```

- *Type:* java.util.List<java.lang.String>

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#array_enum AppUserSchemaProperty#array_enum}

---

##### `arrayOneOf`<sup>Optional</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf"></a>

```java
public java.lang.Object getArrayOneOf();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>>

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#array_one_of AppUserSchemaProperty#array_one_of}

---

##### `arrayType`<sup>Optional</sup> <a name="arrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType"></a>

```java
public java.lang.String getArrayType();
```

- *Type:* java.lang.String

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#array_type AppUserSchemaProperty#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#description AppUserSchemaProperty#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#enum AppUserSchemaProperty#enum}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#external_name AppUserSchemaProperty#external_name}

---

##### `externalNamespace`<sup>Optional</sup> <a name="externalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace"></a>

```java
public java.lang.String getExternalNamespace();
```

- *Type:* java.lang.String

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#external_namespace AppUserSchemaProperty#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master"></a>

```java
public java.lang.String getMaster();
```

- *Type:* java.lang.String

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#master AppUserSchemaProperty#master}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#max_length AppUserSchemaProperty#max_length}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#min_length AppUserSchemaProperty#min_length}

---

##### `oneOf`<sup>Optional</sup> <a name="oneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf"></a>

```java
public java.lang.Object getOneOf();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>>

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#one_of AppUserSchemaProperty#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#permissions AppUserSchemaProperty#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#required AppUserSchemaProperty#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level.

Default value is `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#scope AppUserSchemaProperty#scope}

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union"></a>

```java
public java.lang.Object getUnion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`.

Can not be set to `true` if `scope` is set to `SELF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#union AppUserSchemaProperty#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique"></a>

```java
public java.lang.String getUnique();
```

- *Type:* java.lang.String

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#unique AppUserSchemaProperty#unique}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#user_type AppUserSchemaProperty#user_type}

---

### AppUserSchemaPropertyOneOf <a name="AppUserSchemaPropertyOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaPropertyOneOf;

AppUserSchemaPropertyOneOf.builder()
    .const(java.lang.String)
    .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const">const</a></code> | <code>java.lang.String</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title">title</a></code> | <code>java.lang.String</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaPropertyArrayOneOfList <a name="AppUserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaPropertyArrayOneOfList;

new AppUserSchemaPropertyArrayOneOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get"></a>

```java
public AppUserSchemaPropertyArrayOneOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>>

---


### AppUserSchemaPropertyArrayOneOfOutputReference <a name="AppUserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaPropertyArrayOneOfOutputReference;

new AppUserSchemaPropertyArrayOneOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput">constInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const">const</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```java
public java.lang.String getConstInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf">AppUserSchemaPropertyArrayOneOf</a>

---


### AppUserSchemaPropertyOneOfList <a name="AppUserSchemaPropertyOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaPropertyOneOfList;

new AppUserSchemaPropertyOneOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get"></a>

```java
public AppUserSchemaPropertyOneOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>>

---


### AppUserSchemaPropertyOneOfOutputReference <a name="AppUserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_user_schema_property.AppUserSchemaPropertyOneOfOutputReference;

new AppUserSchemaPropertyOneOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput">constInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const">const</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```java
public java.lang.String getConstInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const"></a>

```java
public java.lang.String getConst();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf">AppUserSchemaPropertyOneOf</a>

---



