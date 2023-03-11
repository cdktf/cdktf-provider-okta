# `userSchema` Submodule <a name="`userSchema` Submodule" id="@cdktf/provider-okta.userSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSchema <a name="UserSchema" id="@cdktf/provider-okta.userSchema.UserSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_schema okta_user_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.NewUserSchema(scope Construct, id *string, config UserSchemaConfig) UserSchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig">UserSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.userSchema.UserSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig">UserSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf">PutArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority">PutMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.putOneOf">PutOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayEnum">ResetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayOneOf">ResetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetArrayType">ResetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetExternalNamespace">ResetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMasterOverridePriority">ResetMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetOneOf">ResetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetUnique">ResetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.userSchema.UserSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.userSchema.UserSchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.userSchema.UserSchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.userSchema.UserSchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutArrayOneOf` <a name="PutArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf"></a>

```go
func PutArrayOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.putArrayOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMasterOverridePriority` <a name="PutMasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority"></a>

```go
func PutMasterOverridePriority(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.putMasterOverridePriority.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOneOf` <a name="PutOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.putOneOf"></a>

```go
func PutOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchema.UserSchema.putOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArrayEnum` <a name="ResetArrayEnum" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayEnum"></a>

```go
func ResetArrayEnum()
```

##### `ResetArrayOneOf` <a name="ResetArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayOneOf"></a>

```go
func ResetArrayOneOf()
```

##### `ResetArrayType` <a name="ResetArrayType" id="@cdktf/provider-okta.userSchema.UserSchema.resetArrayType"></a>

```go
func ResetArrayType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.userSchema.UserSchema.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-okta.userSchema.UserSchema.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-okta.userSchema.UserSchema.resetExternalName"></a>

```go
func ResetExternalName()
```

##### `ResetExternalNamespace` <a name="ResetExternalNamespace" id="@cdktf/provider-okta.userSchema.UserSchema.resetExternalNamespace"></a>

```go
func ResetExternalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.userSchema.UserSchema.resetId"></a>

```go
func ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.userSchema.UserSchema.resetMaster"></a>

```go
func ResetMaster()
```

##### `ResetMasterOverridePriority` <a name="ResetMasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchema.resetMasterOverridePriority"></a>

```go
func ResetMasterOverridePriority()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-okta.userSchema.UserSchema.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-okta.userSchema.UserSchema.resetMinLength"></a>

```go
func ResetMinLength()
```

##### `ResetOneOf` <a name="ResetOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.resetOneOf"></a>

```go
func ResetOneOf()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-okta.userSchema.UserSchema.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.userSchema.UserSchema.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.userSchema.UserSchema.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-okta.userSchema.UserSchema.resetScope"></a>

```go
func ResetScope()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-okta.userSchema.UserSchema.resetUnique"></a>

```go
func ResetUnique()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.userSchema.UserSchema.resetUserType"></a>

```go
func ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.userSchema.UserSchema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.UserSchema_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.UserSchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.UserSchema_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchema.UserSchema.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOf">ArrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList">UserSchemaArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriority">MasterOverridePriority</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList">UserSchemaMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.oneOf">OneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList">UserSchemaOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnumInput">ArrayEnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOfInput">ArrayOneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayTypeInput">ArrayTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.enumInput">EnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNameInput">ExternalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespaceInput">ExternalNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterInput">MasterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriorityInput">MasterOverridePriorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.oneOfInput">OneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.uniqueInput">UniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.arrayType">ArrayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.enum">Enum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalName">ExternalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.master">Master</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.unique">Unique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.userSchema.UserSchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.userSchema.UserSchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.userSchema.UserSchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.userSchema.UserSchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userSchema.UserSchema.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userSchema.UserSchema.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userSchema.UserSchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userSchema.UserSchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userSchema.UserSchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userSchema.UserSchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userSchema.UserSchema.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArrayOneOf`<sup>Required</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOf"></a>

```go
func ArrayOneOf() UserSchemaArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList">UserSchemaArrayOneOfList</a>

---

##### `MasterOverridePriority`<sup>Required</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriority"></a>

```go
func MasterOverridePriority() UserSchemaMasterOverridePriorityList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList">UserSchemaMasterOverridePriorityList</a>

---

##### `OneOf`<sup>Required</sup> <a name="OneOf" id="@cdktf/provider-okta.userSchema.UserSchema.property.oneOf"></a>

```go
func OneOf() UserSchemaOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList">UserSchemaOneOfList</a>

---

##### `ArrayEnumInput`<sup>Optional</sup> <a name="ArrayEnumInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnumInput"></a>

```go
func ArrayEnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayOneOfInput`<sup>Optional</sup> <a name="ArrayOneOfInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayOneOfInput"></a>

```go
func ArrayOneOfInput() interface{}
```

- *Type:* interface{}

---

##### `ArrayTypeInput`<sup>Optional</sup> <a name="ArrayTypeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayTypeInput"></a>

```go
func ArrayTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.enumInput"></a>

```go
func EnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNameInput"></a>

```go
func ExternalNameInput() *string
```

- *Type:* *string

---

##### `ExternalNamespaceInput`<sup>Optional</sup> <a name="ExternalNamespaceInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespaceInput"></a>

```go
func ExternalNamespaceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterInput"></a>

```go
func MasterInput() *string
```

- *Type:* *string

---

##### `MasterOverridePriorityInput`<sup>Optional</sup> <a name="MasterOverridePriorityInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.masterOverridePriorityInput"></a>

```go
func MasterOverridePriorityInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `OneOfInput`<sup>Optional</sup> <a name="OneOfInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.oneOfInput"></a>

```go
func OneOfInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.uniqueInput"></a>

```go
func UniqueInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.userSchema.UserSchema.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `ArrayEnum`<sup>Required</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayEnum"></a>

```go
func ArrayEnum() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayType`<sup>Required</sup> <a name="ArrayType" id="@cdktf/provider-okta.userSchema.UserSchema.property.arrayType"></a>

```go
func ArrayType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.userSchema.UserSchema.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-okta.userSchema.UserSchema.property.enum"></a>

```go
func Enum() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalName"></a>

```go
func ExternalName() *string
```

- *Type:* *string

---

##### `ExternalNamespace`<sup>Required</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.userSchema.UserSchema.property.externalNamespace"></a>

```go
func ExternalNamespace() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.userSchema.UserSchema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchema.UserSchema.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.userSchema.UserSchema.property.master"></a>

```go
func Master() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-okta.userSchema.UserSchema.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-okta.userSchema.UserSchema.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-okta.userSchema.UserSchema.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.userSchema.UserSchema.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.userSchema.UserSchema.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.userSchema.UserSchema.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchema.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchema.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-okta.userSchema.UserSchema.property.unique"></a>

```go
func Unique() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.userSchema.UserSchema.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.userSchema.UserSchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserSchemaArrayOneOf <a name="UserSchemaArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

&userschema.UserSchemaArrayOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.const">Const</a></code> | <code>*string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.title">Title</a></code> | <code>*string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#const UserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

### UserSchemaConfig <a name="UserSchemaConfig" id="@cdktf/provider-okta.userSchema.UserSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

&userschema.UserSchemaConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Index: *string,
	Title: *string,
	Type: *string,
	ArrayEnum: *[]*string,
	ArrayOneOf: interface{},
	ArrayType: *string,
	Description: *string,
	Enum: *[]*string,
	ExternalName: *string,
	ExternalNamespace: *string,
	Id: *string,
	Master: *string,
	MasterOverridePriority: interface{},
	MaxLength: *f64,
	MinLength: *f64,
	OneOf: interface{},
	Pattern: *string,
	Permissions: *string,
	Required: interface{},
	Scope: *string,
	Unique: *string,
	UserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.index">Index</a></code> | <code>*string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.title">Title</a></code> | <code>*string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.type">Type</a></code> | <code>*string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayOneOf">ArrayOneOf</a></code> | <code>interface{}</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayType">ArrayType</a></code> | <code>*string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.description">Description</a></code> | <code>*string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.enum">Enum</a></code> | <code>*[]*string</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalName">ExternalName</a></code> | <code>*string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.master">Master</a></code> | <code>*string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.masterOverridePriority">MasterOverridePriority</a></code> | <code>interface{}</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.maxLength">MaxLength</a></code> | <code>*f64</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.minLength">MinLength</a></code> | <code>*f64</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.oneOf">OneOf</a></code> | <code>interface{}</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.pattern">Pattern</a></code> | <code>*string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.permissions">Permissions</a></code> | <code>*string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.required">Required</a></code> | <code>interface{}</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.unique">Unique</a></code> | <code>*string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaConfig.property.userType">UserType</a></code> | <code>*string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.index"></a>

```go
Index *string
```

- *Type:* *string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#index UserSchema#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}

---

##### `ArrayEnum`<sup>Optional</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayEnum"></a>

```go
ArrayEnum *[]*string
```

- *Type:* *[]*string

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_enum UserSchema#array_enum}

---

##### `ArrayOneOf`<sup>Optional</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayOneOf"></a>

```go
ArrayOneOf interface{}
```

- *Type:* interface{}

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_one_of UserSchema#array_one_of}

---

##### `ArrayType`<sup>Optional</sup> <a name="ArrayType" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.arrayType"></a>

```go
ArrayType *string
```

- *Type:* *string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#array_type UserSchema#array_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#description UserSchema#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.enum"></a>

```go
Enum *[]*string
```

- *Type:* *[]*string

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#enum UserSchema#enum}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalName"></a>

```go
ExternalName *string
```

- *Type:* *string

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_name UserSchema#external_name}

---

##### `ExternalNamespace`<sup>Optional</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.externalNamespace"></a>

```go
ExternalNamespace *string
```

- *Type:* *string

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#external_namespace UserSchema#external_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#id UserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.master"></a>

```go
Master *string
```

- *Type:* *string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master UserSchema#master}

---

##### `MasterOverridePriority`<sup>Optional</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.masterOverridePriority"></a>

```go
MasterOverridePriority interface{}
```

- *Type:* interface{}

master_override_priority block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#master_override_priority UserSchema#master_override_priority}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#max_length UserSchema#max_length}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#min_length UserSchema#min_length}

---

##### `OneOf`<sup>Optional</sup> <a name="OneOf" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.oneOf"></a>

```go
OneOf interface{}
```

- *Type:* interface{}

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#one_of UserSchema#one_of}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#pattern UserSchema#pattern}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#permissions UserSchema#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#required UserSchema#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#scope UserSchema#scope}.

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.unique"></a>

```go
Unique *string
```

- *Type:* *string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#unique UserSchema#unique}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.userSchema.UserSchemaConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#user_type UserSchema#user_type}

---

### UserSchemaMasterOverridePriority <a name="UserSchemaMasterOverridePriority" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

&userschema.UserSchemaMasterOverridePriority {
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#value UserSchema#value}. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#value UserSchema#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriority.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#type UserSchema#type}.

---

### UserSchemaOneOf <a name="UserSchemaOneOf" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

&userschema.UserSchemaOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.const">Const</a></code> | <code>*string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.title">Title</a></code> | <code>*string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#const UserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_schema#title UserSchema#title}

---

## Classes <a name="Classes" id="Classes"></a>

### UserSchemaArrayOneOfList <a name="UserSchemaArrayOneOfList" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.NewUserSchemaArrayOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UserSchemaArrayOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get"></a>

```go
func Get(index *f64) UserSchemaArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaArrayOneOfOutputReference <a name="UserSchemaArrayOneOfOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.NewUserSchemaArrayOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UserSchemaArrayOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaArrayOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaMasterOverridePriorityList <a name="UserSchemaMasterOverridePriorityList" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.NewUserSchemaMasterOverridePriorityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UserSchemaMasterOverridePriorityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get"></a>

```go
func Get(index *f64) UserSchemaMasterOverridePriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaMasterOverridePriorityOutputReference <a name="UserSchemaMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.NewUserSchemaMasterOverridePriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UserSchemaMasterOverridePriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaMasterOverridePriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaOneOfList <a name="UserSchemaOneOfList" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.NewUserSchemaOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UserSchemaOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get"></a>

```go
func Get(index *f64) UserSchemaOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaOneOfOutputReference <a name="UserSchemaOneOfOutputReference" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/userschema"

userschema.NewUserSchemaOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UserSchemaOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchema.UserSchemaOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



