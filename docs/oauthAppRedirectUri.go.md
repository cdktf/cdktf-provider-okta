# `okta_oauth_app_redirect_uri`

Refer to the Terraform Registory for docs: [`okta_oauth_app_redirect_uri`](https://www.terraform.io/docs/providers/okta/r/oauth_app_redirect_uri).

# `oauthAppRedirectUri` Submodule <a name="`oauthAppRedirectUri` Submodule" id="@cdktf/provider-okta.oauthAppRedirectUri"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthAppRedirectUri <a name="OauthAppRedirectUri" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/oauth_app_redirect_uri okta_oauth_app_redirect_uri}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthappredirecturi"

oauthappredirecturi.NewOauthAppRedirectUri(scope Construct, id *string, config OauthAppRedirectUriConfig) OauthAppRedirectUri
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig">OauthAppRedirectUriConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig">OauthAppRedirectUriConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthappredirecturi"

oauthappredirecturi.OauthAppRedirectUri_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthappredirecturi"

oauthappredirecturi.OauthAppRedirectUri_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthappredirecturi"

oauthappredirecturi.OauthAppRedirectUri_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUri.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthAppRedirectUriConfig <a name="OauthAppRedirectUriConfig" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthappredirecturi"

&oauthappredirecturi.OauthAppRedirectUriConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Uri: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app_redirect_uri#app_id OauthAppRedirectUri#app_id}. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.uri">Uri</a></code> | <code>*string</code> | Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app_redirect_uri#id OauthAppRedirectUri#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app_redirect_uri#app_id OauthAppRedirectUri#app_id}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app_redirect_uri#uri OauthAppRedirectUri#uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.oauthAppRedirectUri.OauthAppRedirectUriConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app_redirect_uri#id OauthAppRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



