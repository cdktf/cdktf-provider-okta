# `okta_app_user_base_schema`

Refer to the Terraform Registory for docs: [`okta_app_user_base_schema`](https://www.terraform.io/docs/providers/okta/r/app_user_base_schema).

# `appUserBaseSchema` Submodule <a name="`appUserBaseSchema` Submodule" id="@cdktf/provider-okta.appUserBaseSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserBaseSchema <a name="AppUserBaseSchema" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema okta_app_user_base_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserbaseschema"

appuserbaseschema.NewAppUserBaseSchema(scope Construct, id *string, config AppUserBaseSchemaConfig) AppUserBaseSchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig">AppUserBaseSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig">AppUserBaseSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetId"></a>

```go
func ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetMaster"></a>

```go
func ResetMaster()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetUserType"></a>

```go
func ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserbaseschema"

appuserbaseschema.AppUserBaseSchema_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserbaseschema"

appuserbaseschema.AppUserBaseSchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserbaseschema"

appuserbaseschema.AppUserBaseSchema_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.masterInput">MasterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.master">Master</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.masterInput"></a>

```go
func MasterInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.master"></a>

```go
func Master() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserBaseSchemaConfig <a name="AppUserBaseSchemaConfig" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserbaseschema"

&appuserbaseschema.AppUserBaseSchemaConfig {
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
	Id: *string,
	Master: *string,
	Pattern: *string,
	Permissions: *string,
	Required: interface{},
	UserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#app_id AppUserBaseSchema#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.index">Index</a></code> | <code>*string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.title">Title</a></code> | <code>*string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.type">Type</a></code> | <code>*string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#id AppUserBaseSchema#id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.master">Master</a></code> | <code>*string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.pattern">Pattern</a></code> | <code>*string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.permissions">Permissions</a></code> | <code>*string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.required">Required</a></code> | <code>interface{}</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.userType">UserType</a></code> | <code>*string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#app_id AppUserBaseSchema#app_id}.

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.index"></a>

```go
Index *string
```

- *Type:* *string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#index AppUserBaseSchema#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#title AppUserBaseSchema#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#type AppUserBaseSchema#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#id AppUserBaseSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.master"></a>

```go
Master *string
```

- *Type:* *string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#master AppUserBaseSchema#master}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#pattern AppUserBaseSchema#pattern}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#permissions AppUserBaseSchema#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#required AppUserBaseSchema#required}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#user_type AppUserBaseSchema#user_type}

---



