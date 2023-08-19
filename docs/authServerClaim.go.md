# `okta_auth_server_claim`

Refer to the Terraform Registory for docs: [`okta_auth_server_claim`](https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim).

# `authServerClaim` Submodule <a name="`authServerClaim` Submodule" id="@cdktf/provider-okta.authServerClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerClaim <a name="AuthServerClaim" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim okta_auth_server_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/authserverclaim"

authserverclaim.NewAuthServerClaim(scope Construct, id *string, config AuthServerClaimConfig) AuthServerClaim
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig">AuthServerClaimConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig">AuthServerClaimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken">ResetAlwaysIncludeInToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType">ResetGroupFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAlwaysIncludeInToken` <a name="ResetAlwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken"></a>

```go
func ResetAlwaysIncludeInToken()
```

##### `ResetGroupFilterType` <a name="ResetGroupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType"></a>

```go
func ResetGroupFilterType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId"></a>

```go
func ResetId()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType"></a>

```go
func ResetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/authserverclaim"

authserverclaim.AuthServerClaim_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/authserverclaim"

authserverclaim.AuthServerClaim_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/authserverclaim"

authserverclaim.AuthServerClaim_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput">AlwaysIncludeInTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput">AuthServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput">ClaimTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput">GroupFilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken">AlwaysIncludeInToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId">AuthServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType">ClaimType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType">GroupFilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlwaysIncludeInTokenInput`<sup>Optional</sup> <a name="AlwaysIncludeInTokenInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput"></a>

```go
func AlwaysIncludeInTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AuthServerIdInput`<sup>Optional</sup> <a name="AuthServerIdInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput"></a>

```go
func AuthServerIdInput() *string
```

- *Type:* *string

---

##### `ClaimTypeInput`<sup>Optional</sup> <a name="ClaimTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput"></a>

```go
func ClaimTypeInput() *string
```

- *Type:* *string

---

##### `GroupFilterTypeInput`<sup>Optional</sup> <a name="GroupFilterTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput"></a>

```go
func GroupFilterTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `AlwaysIncludeInToken`<sup>Required</sup> <a name="AlwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken"></a>

```go
func AlwaysIncludeInToken() interface{}
```

- *Type:* interface{}

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId"></a>

```go
func AuthServerId() *string
```

- *Type:* *string

---

##### `ClaimType`<sup>Required</sup> <a name="ClaimType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType"></a>

```go
func ClaimType() *string
```

- *Type:* *string

---

##### `GroupFilterType`<sup>Required</sup> <a name="GroupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType"></a>

```go
func GroupFilterType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerClaimConfig <a name="AuthServerClaimConfig" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/authserverclaim"

&authserverclaim.AuthServerClaimConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthServerId: *string,
	ClaimType: *string,
	Name: *string,
	Value: *string,
	AlwaysIncludeInToken: interface{},
	GroupFilterType: *string,
	Id: *string,
	Scopes: *[]*string,
	Status: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId">AuthServerId</a></code> | <code>*string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType">ClaimType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name">Name</a></code> | <code>*string</code> | Auth server claim name. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#value AuthServerClaim#value}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken">AlwaysIncludeInToken</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType">GroupFilterType</a></code> | <code>*string</code> | Required when value_type is GROUPS. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#id AuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Auth server claim list of scopes. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#status AuthServerClaim#status}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType">ValueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId"></a>

```go
AuthServerId *string
```

- *Type:* *string

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#auth_server_id AuthServerClaim#auth_server_id}

---

##### `ClaimType`<sup>Required</sup> <a name="ClaimType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType"></a>

```go
ClaimType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Auth server claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#name AuthServerClaim#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#value AuthServerClaim#value}.

---

##### `AlwaysIncludeInToken`<sup>Optional</sup> <a name="AlwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken"></a>

```go
AlwaysIncludeInToken interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}.

---

##### `GroupFilterType`<sup>Optional</sup> <a name="GroupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType"></a>

```go
GroupFilterType *string
```

- *Type:* *string

Required when value_type is GROUPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#group_filter_type AuthServerClaim#group_filter_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#id AuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Auth server claim list of scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#scopes AuthServerClaim#scopes}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#status AuthServerClaim#status}.

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}.

---



