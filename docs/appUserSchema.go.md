# `okta_app_user_schema`

Refer to the Terraform Registory for docs: [`okta_app_user_schema`](https://www.terraform.io/docs/providers/okta/r/app_user_schema).

# `appUserSchema` Submodule <a name="`appUserSchema` Submodule" id="@cdktf/provider-okta.appUserSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchema <a name="AppUserSchema" id="@cdktf/provider-okta.appUserSchema.AppUserSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema okta_app_user_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.NewAppUserSchema(scope Construct, id *string, config AppUserSchemaConfig) AppUserSchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig">AppUserSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig">AppUserSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf">PutArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf">PutOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum">ResetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf">ResetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType">ResetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace">ResetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf">ResetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion">ResetUnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique">ResetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutArrayOneOf` <a name="PutArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf"></a>

```go
func PutArrayOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOneOf` <a name="PutOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf"></a>

```go
func PutOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArrayEnum` <a name="ResetArrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum"></a>

```go
func ResetArrayEnum()
```

##### `ResetArrayOneOf` <a name="ResetArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf"></a>

```go
func ResetArrayOneOf()
```

##### `ResetArrayType` <a name="ResetArrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType"></a>

```go
func ResetArrayType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName"></a>

```go
func ResetExternalName()
```

##### `ResetExternalNamespace` <a name="ResetExternalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace"></a>

```go
func ResetExternalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId"></a>

```go
func ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster"></a>

```go
func ResetMaster()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength"></a>

```go
func ResetMinLength()
```

##### `ResetOneOf` <a name="ResetOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf"></a>

```go
func ResetOneOf()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope"></a>

```go
func ResetScope()
```

##### `ResetUnion` <a name="ResetUnion" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion"></a>

```go
func ResetUnion()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique"></a>

```go
func ResetUnique()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType"></a>

```go
func ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.AppUserSchema_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.AppUserSchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.AppUserSchema_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf">ArrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf">OneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput">ArrayEnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput">ArrayOneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput">ArrayTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput">EnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput">ExternalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput">ExternalNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput">MasterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput">OneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput">UnionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput">UniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType">ArrayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum">Enum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName">ExternalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master">Master</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union">Union</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique">Unique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArrayOneOf`<sup>Required</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf"></a>

```go
func ArrayOneOf() AppUserSchemaArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a>

---

##### `OneOf`<sup>Required</sup> <a name="OneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf"></a>

```go
func OneOf() AppUserSchemaOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `ArrayEnumInput`<sup>Optional</sup> <a name="ArrayEnumInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput"></a>

```go
func ArrayEnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayOneOfInput`<sup>Optional</sup> <a name="ArrayOneOfInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput"></a>

```go
func ArrayOneOfInput() interface{}
```

- *Type:* interface{}

---

##### `ArrayTypeInput`<sup>Optional</sup> <a name="ArrayTypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput"></a>

```go
func ArrayTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput"></a>

```go
func EnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput"></a>

```go
func ExternalNameInput() *string
```

- *Type:* *string

---

##### `ExternalNamespaceInput`<sup>Optional</sup> <a name="ExternalNamespaceInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput"></a>

```go
func ExternalNamespaceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput"></a>

```go
func MasterInput() *string
```

- *Type:* *string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `OneOfInput`<sup>Optional</sup> <a name="OneOfInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput"></a>

```go
func OneOfInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnionInput`<sup>Optional</sup> <a name="UnionInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput"></a>

```go
func UnionInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput"></a>

```go
func UniqueInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `ArrayEnum`<sup>Required</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum"></a>

```go
func ArrayEnum() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayType`<sup>Required</sup> <a name="ArrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType"></a>

```go
func ArrayType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum"></a>

```go
func Enum() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName"></a>

```go
func ExternalName() *string
```

- *Type:* *string

---

##### `ExternalNamespace`<sup>Required</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace"></a>

```go
func ExternalNamespace() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master"></a>

```go
func Master() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Union`<sup>Required</sup> <a name="Union" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union"></a>

```go
func Union() interface{}
```

- *Type:* interface{}

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique"></a>

```go
func Unique() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaArrayOneOf <a name="AppUserSchemaArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

&appuserschema.AppUserSchemaArrayOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const">Const</a></code> | <code>*string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title">Title</a></code> | <code>*string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#const AppUserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

### AppUserSchemaConfig <a name="AppUserSchemaConfig" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

&appuserschema.AppUserSchemaConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
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
	MaxLength: *f64,
	MinLength: *f64,
	OneOf: interface{},
	Permissions: *string,
	Required: interface{},
	Scope: *string,
	Union: interface{},
	Unique: *string,
	UserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#app_id AppUserSchema#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index">Index</a></code> | <code>*string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title">Title</a></code> | <code>*string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type">Type</a></code> | <code>*string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf">ArrayOneOf</a></code> | <code>interface{}</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType">ArrayType</a></code> | <code>*string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description">Description</a></code> | <code>*string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum">Enum</a></code> | <code>*[]*string</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName">ExternalName</a></code> | <code>*string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#id AppUserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master">Master</a></code> | <code>*string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength">MaxLength</a></code> | <code>*f64</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength">MinLength</a></code> | <code>*f64</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf">OneOf</a></code> | <code>interface{}</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions">Permissions</a></code> | <code>*string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required">Required</a></code> | <code>interface{}</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#scope AppUserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union">Union</a></code> | <code>interface{}</code> | Allows to assign attribute's group priority. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique">Unique</a></code> | <code>*string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType">UserType</a></code> | <code>*string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#app_id AppUserSchema#app_id}.

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index"></a>

```go
Index *string
```

- *Type:* *string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#index AppUserSchema#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#type AppUserSchema#type}

---

##### `ArrayEnum`<sup>Optional</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum"></a>

```go
ArrayEnum *[]*string
```

- *Type:* *[]*string

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_enum AppUserSchema#array_enum}

---

##### `ArrayOneOf`<sup>Optional</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf"></a>

```go
ArrayOneOf interface{}
```

- *Type:* interface{}

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_one_of AppUserSchema#array_one_of}

---

##### `ArrayType`<sup>Optional</sup> <a name="ArrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType"></a>

```go
ArrayType *string
```

- *Type:* *string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_type AppUserSchema#array_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#description AppUserSchema#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum"></a>

```go
Enum *[]*string
```

- *Type:* *[]*string

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#enum AppUserSchema#enum}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName"></a>

```go
ExternalName *string
```

- *Type:* *string

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#external_name AppUserSchema#external_name}

---

##### `ExternalNamespace`<sup>Optional</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace"></a>

```go
ExternalNamespace *string
```

- *Type:* *string

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#external_namespace AppUserSchema#external_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#id AppUserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master"></a>

```go
Master *string
```

- *Type:* *string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#master AppUserSchema#master}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#max_length AppUserSchema#max_length}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#min_length AppUserSchema#min_length}

---

##### `OneOf`<sup>Optional</sup> <a name="OneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf"></a>

```go
OneOf interface{}
```

- *Type:* interface{}

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#one_of AppUserSchema#one_of}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#permissions AppUserSchema#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#required AppUserSchema#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#scope AppUserSchema#scope}.

---

##### `Union`<sup>Optional</sup> <a name="Union" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union"></a>

```go
Union interface{}
```

- *Type:* interface{}

Allows to assign attribute's group priority.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#union AppUserSchema#union}

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique"></a>

```go
Unique *string
```

- *Type:* *string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#unique AppUserSchema#unique}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#user_type AppUserSchema#user_type}

---

### AppUserSchemaOneOf <a name="AppUserSchemaOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

&appuserschema.AppUserSchemaOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const">Const</a></code> | <code>*string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title">Title</a></code> | <code>*string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#const AppUserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaArrayOneOfList <a name="AppUserSchemaArrayOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.NewAppUserSchemaArrayOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppUserSchemaArrayOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get"></a>

```go
func Get(index *f64) AppUserSchemaArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppUserSchemaArrayOneOfOutputReference <a name="AppUserSchemaArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.NewAppUserSchemaArrayOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppUserSchemaArrayOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppUserSchemaOneOfList <a name="AppUserSchemaOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.NewAppUserSchemaOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppUserSchemaOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get"></a>

```go
func Get(index *f64) AppUserSchemaOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppUserSchemaOneOfOutputReference <a name="AppUserSchemaOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v6/appuserschema"

appuserschema.NewAppUserSchemaOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppUserSchemaOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



