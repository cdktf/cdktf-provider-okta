# `factorTotp` Submodule <a name="`factorTotp` Submodule" id="@cdktf/provider-okta.factorTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FactorTotp <a name="FactorTotp" id="@cdktf/provider-okta.factorTotp.FactorTotp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/factor_totp okta_factor_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/factortotp"

factortotp.NewFactorTotp(scope Construct, id *string, config FactorTotpConfig) FactorTotp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig">FactorTotpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.factorTotp.FactorTotp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig">FactorTotpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval">ResetClockDriftInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm">ResetHmacAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength">ResetOtpLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding">ResetSharedSecretEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep">ResetTimeStep</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.factorTotp.FactorTotp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.factorTotp.FactorTotp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.factorTotp.FactorTotp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.factorTotp.FactorTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetClockDriftInterval` <a name="ResetClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetClockDriftInterval"></a>

```go
func ResetClockDriftInterval()
```

##### `ResetHmacAlgorithm` <a name="ResetHmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetHmacAlgorithm"></a>

```go
func ResetHmacAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetId"></a>

```go
func ResetId()
```

##### `ResetOtpLength` <a name="ResetOtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetOtpLength"></a>

```go
func ResetOtpLength()
```

##### `ResetSharedSecretEncoding` <a name="ResetSharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetSharedSecretEncoding"></a>

```go
func ResetSharedSecretEncoding()
```

##### `ResetTimeStep` <a name="ResetTimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.resetTimeStep"></a>

```go
func ResetTimeStep()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/factortotp"

factortotp.FactorTotp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/factortotp"

factortotp.FactorTotp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/factortotp"

factortotp.FactorTotp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.factorTotp.FactorTotp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput">ClockDriftIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput">HmacAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput">OtpLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput">SharedSecretEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput">TimeStepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval">ClockDriftInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm">HmacAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength">OtpLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding">SharedSecretEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep">TimeStep</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClockDriftIntervalInput`<sup>Optional</sup> <a name="ClockDriftIntervalInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftIntervalInput"></a>

```go
func ClockDriftIntervalInput() *f64
```

- *Type:* *f64

---

##### `HmacAlgorithmInput`<sup>Optional</sup> <a name="HmacAlgorithmInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithmInput"></a>

```go
func HmacAlgorithmInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OtpLengthInput`<sup>Optional</sup> <a name="OtpLengthInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLengthInput"></a>

```go
func OtpLengthInput() *f64
```

- *Type:* *f64

---

##### `SharedSecretEncodingInput`<sup>Optional</sup> <a name="SharedSecretEncodingInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncodingInput"></a>

```go
func SharedSecretEncodingInput() *string
```

- *Type:* *string

---

##### `TimeStepInput`<sup>Optional</sup> <a name="TimeStepInput" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStepInput"></a>

```go
func TimeStepInput() *f64
```

- *Type:* *f64

---

##### `ClockDriftInterval`<sup>Required</sup> <a name="ClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.clockDriftInterval"></a>

```go
func ClockDriftInterval() *f64
```

- *Type:* *f64

---

##### `HmacAlgorithm`<sup>Required</sup> <a name="HmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.hmacAlgorithm"></a>

```go
func HmacAlgorithm() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OtpLength`<sup>Required</sup> <a name="OtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.otpLength"></a>

```go
func OtpLength() *f64
```

- *Type:* *f64

---

##### `SharedSecretEncoding`<sup>Required</sup> <a name="SharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.sharedSecretEncoding"></a>

```go
func SharedSecretEncoding() *string
```

- *Type:* *string

---

##### `TimeStep`<sup>Required</sup> <a name="TimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.timeStep"></a>

```go
func TimeStep() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.factorTotp.FactorTotp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FactorTotpConfig <a name="FactorTotpConfig" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/factortotp"

&factortotp.FactorTotpConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ClockDriftInterval: *f64,
	HmacAlgorithm: *string,
	Id: *string,
	OtpLength: *f64,
	SharedSecretEncoding: *string,
	TimeStep: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name">Name</a></code> | <code>*string</code> | Factor name. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval">ClockDriftInterval</a></code> | <code>*f64</code> | Clock drift interval. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm">HmacAlgorithm</a></code> | <code>*string</code> | Hash-based message authentication code algorithm. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#id FactorTotp#id}. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength">OtpLength</a></code> | <code>*f64</code> | Factor name. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding">SharedSecretEncoding</a></code> | <code>*string</code> | Shared secret encoding. |
| <code><a href="#@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep">TimeStep</a></code> | <code>*f64</code> | Time step in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Factor name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#name FactorTotp#name}

---

##### `ClockDriftInterval`<sup>Optional</sup> <a name="ClockDriftInterval" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.clockDriftInterval"></a>

```go
ClockDriftInterval *f64
```

- *Type:* *f64

Clock drift interval.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#clock_drift_interval FactorTotp#clock_drift_interval}

---

##### `HmacAlgorithm`<sup>Optional</sup> <a name="HmacAlgorithm" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.hmacAlgorithm"></a>

```go
HmacAlgorithm *string
```

- *Type:* *string

Hash-based message authentication code algorithm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#hmac_algorithm FactorTotp#hmac_algorithm}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#id FactorTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OtpLength`<sup>Optional</sup> <a name="OtpLength" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.otpLength"></a>

```go
OtpLength *f64
```

- *Type:* *f64

Factor name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#otp_length FactorTotp#otp_length}

---

##### `SharedSecretEncoding`<sup>Optional</sup> <a name="SharedSecretEncoding" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.sharedSecretEncoding"></a>

```go
SharedSecretEncoding *string
```

- *Type:* *string

Shared secret encoding.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#shared_secret_encoding FactorTotp#shared_secret_encoding}

---

##### `TimeStep`<sup>Optional</sup> <a name="TimeStep" id="@cdktf/provider-okta.factorTotp.FactorTotpConfig.property.timeStep"></a>

```go
TimeStep *f64
```

- *Type:* *f64

Time step in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#time_step FactorTotp#time_step}

---


