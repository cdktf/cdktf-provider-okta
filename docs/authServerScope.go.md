# `okta_auth_server_scope`

Refer to the Terraform Registory for docs: [`okta_auth_server_scope`](https://www.terraform.io/docs/providers/okta/r/auth_server_scope).

# `authServerScope` Submodule <a name="`authServerScope` Submodule" id="@cdktf/provider-okta.authServerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerScope <a name="AuthServerScope" id="@cdktf/provider-okta.authServerScope.AuthServerScope"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope okta_auth_server_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverscope"

authserverscope.NewAuthServerScope(scope Construct, id *string, config AuthServerScopeConfig) AuthServerScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig">AuthServerScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig">AuthServerScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetConsent">ResetConsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetMetadataPublish">ResetMetadataPublish</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetConsent` <a name="ResetConsent" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetConsent"></a>

```go
func ResetConsent()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadataPublish` <a name="ResetMetadataPublish" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetMetadataPublish"></a>

```go
func ResetMetadataPublish()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverscope"

authserverscope.AuthServerScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverscope"

authserverscope.AuthServerScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverscope"

authserverscope.AuthServerScope_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.systemAttribute">SystemAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerIdInput">AuthServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.consentInput">ConsentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublishInput">MetadataPublishInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerId">AuthServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.consent">Consent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublish">MetadataPublish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.systemAttribute"></a>

```go
func SystemAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AuthServerIdInput`<sup>Optional</sup> <a name="AuthServerIdInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerIdInput"></a>

```go
func AuthServerIdInput() *string
```

- *Type:* *string

---

##### `ConsentInput`<sup>Optional</sup> <a name="ConsentInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.consentInput"></a>

```go
func ConsentInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataPublishInput`<sup>Optional</sup> <a name="MetadataPublishInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublishInput"></a>

```go
func MetadataPublishInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerId"></a>

```go
func AuthServerId() *string
```

- *Type:* *string

---

##### `Consent`<sup>Required</sup> <a name="Consent" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.consent"></a>

```go
func Consent() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetadataPublish`<sup>Required</sup> <a name="MetadataPublish" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublish"></a>

```go
func MetadataPublish() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerScopeConfig <a name="AuthServerScopeConfig" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/authserverscope"

&authserverscope.AuthServerScopeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthServerId: *string,
	Name: *string,
	Consent: *string,
	Default: interface{},
	Description: *string,
	DisplayName: *string,
	Id: *string,
	MetadataPublish: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.authServerId">AuthServerId</a></code> | <code>*string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.name">Name</a></code> | <code>*string</code> | Auth server scope name. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.consent">Consent</a></code> | <code>*string</code> | EA Feature and thus it is simply ignored if the feature is off. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.default">Default</a></code> | <code>interface{}</code> | A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#description AuthServerScope#description}. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Name of the end user displayed in a consent dialog box. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#id AuthServerScope#id}. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.metadataPublish">MetadataPublish</a></code> | <code>*string</code> | Whether to publish metadata or not, matching API type despite the fact it could just be a boolean. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.authServerId"></a>

```go
AuthServerId *string
```

- *Type:* *string

Auth server ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#auth_server_id AuthServerScope#auth_server_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Auth server scope name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#name AuthServerScope#name}

---

##### `Consent`<sup>Optional</sup> <a name="Consent" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.consent"></a>

```go
Consent *string
```

- *Type:* *string

EA Feature and thus it is simply ignored if the feature is off.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#consent AuthServerScope#consent}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#default AuthServerScope#default}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#description AuthServerScope#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Name of the end user displayed in a consent dialog box.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#display_name AuthServerScope#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#id AuthServerScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetadataPublish`<sup>Optional</sup> <a name="MetadataPublish" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.metadataPublish"></a>

```go
MetadataPublish *string
```

- *Type:* *string

Whether to publish metadata or not, matching API type despite the fact it could just be a boolean.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#metadata_publish AuthServerScope#metadata_publish}

---



