# `adminRoleCustom` Submodule <a name="`adminRoleCustom` Submodule" id="@cdktf/provider-okta.adminRoleCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminRoleCustom <a name="AdminRoleCustom" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom okta_admin_role_custom}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/adminrolecustom"

adminrolecustom.NewAdminRoleCustom(scope Construct, id *string, config AdminRoleCustomConfig) AdminRoleCustom
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig">AdminRoleCustomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig">AdminRoleCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.resetId"></a>

```go
func ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.resetPermissions"></a>

```go
func ResetPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/adminrolecustom"

adminrolecustom.AdminRoleCustom_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/adminrolecustom"

adminrolecustom.AdminRoleCustom_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/adminrolecustom"

adminrolecustom.AdminRoleCustom_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustom.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AdminRoleCustomConfig <a name="AdminRoleCustomConfig" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/adminrolecustom"

&adminrolecustom.AdminRoleCustomConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Label: *string,
	Id: *string,
	Permissions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the new Role. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.label">Label</a></code> | <code>*string</code> | The name given to the new Role. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom#id AdminRoleCustom#id}. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The permissions that the new Role grants. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the new Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom#description AdminRoleCustom#description}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

The name given to the new Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom#label AdminRoleCustom#label}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom#id AdminRoleCustom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.adminRoleCustom.AdminRoleCustomConfig.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The permissions that the new Role grants.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom#permissions AdminRoleCustom#permissions}

---


