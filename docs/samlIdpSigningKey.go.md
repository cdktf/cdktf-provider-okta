# `samlIdpSigningKey` Submodule <a name="`samlIdpSigningKey` Submodule" id="@cdktf/provider-okta.samlIdpSigningKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdpSigningKey <a name="SamlIdpSigningKey" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key okta_saml_idp_signing_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/samlidpsigningkey"

samlidpsigningkey.NewSamlIdpSigningKey(scope Construct, id *string, config SamlIdpSigningKeyConfig) SamlIdpSigningKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig">SamlIdpSigningKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig">SamlIdpSigningKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/samlidpsigningkey"

samlidpsigningkey.SamlIdpSigningKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/samlidpsigningkey"

samlidpsigningkey.SamlIdpSigningKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/samlidpsigningkey"

samlidpsigningkey.SamlIdpSigningKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.kty">Kty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.use">Use</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.x5TS256">X5TS256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.x5CInput">X5CInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.x5C">X5C</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.kty"></a>

```go
func Kty() *string
```

- *Type:* *string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.use"></a>

```go
func Use() *string
```

- *Type:* *string

---

##### `X5TS256`<sup>Required</sup> <a name="X5TS256" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.x5TS256"></a>

```go
func X5TS256() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `X5CInput`<sup>Optional</sup> <a name="X5CInput" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.x5CInput"></a>

```go
func X5CInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `X5C`<sup>Required</sup> <a name="X5C" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.x5C"></a>

```go
func X5C() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpSigningKeyConfig <a name="SamlIdpSigningKeyConfig" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v5/samlidpsigningkey"

&samlidpsigningkey.SamlIdpSigningKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	X5C: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.x5C">X5C</a></code> | <code>*[]*string</code> | base64-encoded X.509 certificate chain with DER encoding. |
| <code><a href="#@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key#id SamlIdpSigningKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `X5C`<sup>Required</sup> <a name="X5C" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.x5C"></a>

```go
X5C *[]*string
```

- *Type:* *[]*string

base64-encoded X.509 certificate chain with DER encoding.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key#x5c SamlIdpSigningKey#x5c}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.samlIdpSigningKey.SamlIdpSigningKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_idp_signing_key#id SamlIdpSigningKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



