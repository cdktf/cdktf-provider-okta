# `okta_mfa_policy`

Refer to the Terraform Registory for docs: [`okta_mfa_policy`](https://www.terraform.io/docs/providers/okta/r/mfa_policy).

# `mfaPolicy` Submodule <a name="`mfaPolicy` Submodule" id="@cdktf/provider-okta.mfaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicy <a name="MfaPolicy" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy okta_mfa_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicy"

mfapolicy.NewMfaPolicy(scope Construct, id *string, config MfaPolicyConfig) MfaPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig">MfaPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig">MfaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo">ResetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp">ResetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F">ResetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn">ResetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp">ResetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded">ResetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp">ResetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie">ResetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall">ResetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail">ResetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp">ResetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword">ResetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush">ResetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion">ResetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms">ResetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify">ResetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa">ResetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken">ResetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion">ResetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip">ResetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn">ResetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken">ResetYubikeyToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDuo` <a name="ResetDuo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo"></a>

```go
func ResetDuo()
```

##### `ResetExternalIdp` <a name="ResetExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp"></a>

```go
func ResetExternalIdp()
```

##### `ResetFidoU2F` <a name="ResetFidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F"></a>

```go
func ResetFidoU2F()
```

##### `ResetFidoWebauthn` <a name="ResetFidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn"></a>

```go
func ResetFidoWebauthn()
```

##### `ResetGoogleOtp` <a name="ResetGoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp"></a>

```go
func ResetGoogleOtp()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded"></a>

```go
func ResetGroupsIncluded()
```

##### `ResetHotp` <a name="ResetHotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp"></a>

```go
func ResetHotp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetIsOie` <a name="ResetIsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie"></a>

```go
func ResetIsOie()
```

##### `ResetOktaCall` <a name="ResetOktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall"></a>

```go
func ResetOktaCall()
```

##### `ResetOktaEmail` <a name="ResetOktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail"></a>

```go
func ResetOktaEmail()
```

##### `ResetOktaOtp` <a name="ResetOktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp"></a>

```go
func ResetOktaOtp()
```

##### `ResetOktaPassword` <a name="ResetOktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword"></a>

```go
func ResetOktaPassword()
```

##### `ResetOktaPush` <a name="ResetOktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush"></a>

```go
func ResetOktaPush()
```

##### `ResetOktaQuestion` <a name="ResetOktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion"></a>

```go
func ResetOktaQuestion()
```

##### `ResetOktaSms` <a name="ResetOktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms"></a>

```go
func ResetOktaSms()
```

##### `ResetOktaVerify` <a name="ResetOktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify"></a>

```go
func ResetOktaVerify()
```

##### `ResetOnpremMfa` <a name="ResetOnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa"></a>

```go
func ResetOnpremMfa()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRsaToken` <a name="ResetRsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken"></a>

```go
func ResetRsaToken()
```

##### `ResetSecurityQuestion` <a name="ResetSecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion"></a>

```go
func ResetSecurityQuestion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSymantecVip` <a name="ResetSymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip"></a>

```go
func ResetSymantecVip()
```

##### `ResetWebauthn` <a name="ResetWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn"></a>

```go
func ResetWebauthn()
```

##### `ResetYubikeyToken` <a name="ResetYubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken"></a>

```go
func ResetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicy"

mfapolicy.MfaPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicy"

mfapolicy.MfaPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicy"

mfapolicy.MfaPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput">DuoInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput">ExternalIdpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput">FidoU2FInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput">FidoWebauthnInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput">GoogleOtpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput">HotpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput">IsOieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput">OktaCallInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput">OktaEmailInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput">OktaOtpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput">OktaPasswordInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput">OktaPushInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput">OktaQuestionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput">OktaSmsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput">OktaVerifyInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput">OnpremMfaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput">RsaTokenInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput">SecurityQuestionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput">SymantecVipInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput">WebauthnInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput">YubikeyTokenInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo">Duo</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp">ExternalIdp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F">FidoU2F</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn">FidoWebauthn</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp">GoogleOtp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp">Hotp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie">IsOie</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall">OktaCall</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail">OktaEmail</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp">OktaOtp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword">OktaPassword</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush">OktaPush</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion">OktaQuestion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms">OktaSms</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify">OktaVerify</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa">OnpremMfa</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber">PhoneNumber</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken">RsaToken</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion">SecurityQuestion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip">SymantecVip</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn">Webauthn</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken">YubikeyToken</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DuoInput`<sup>Optional</sup> <a name="DuoInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput"></a>

```go
func DuoInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdpInput`<sup>Optional</sup> <a name="ExternalIdpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput"></a>

```go
func ExternalIdpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoU2FInput`<sup>Optional</sup> <a name="FidoU2FInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput"></a>

```go
func FidoU2FInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoWebauthnInput`<sup>Optional</sup> <a name="FidoWebauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput"></a>

```go
func FidoWebauthnInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GoogleOtpInput`<sup>Optional</sup> <a name="GoogleOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput"></a>

```go
func GoogleOtpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput"></a>

```go
func GroupsIncludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `HotpInput`<sup>Optional</sup> <a name="HotpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput"></a>

```go
func HotpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsOieInput`<sup>Optional</sup> <a name="IsOieInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput"></a>

```go
func IsOieInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OktaCallInput`<sup>Optional</sup> <a name="OktaCallInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput"></a>

```go
func OktaCallInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaEmailInput`<sup>Optional</sup> <a name="OktaEmailInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput"></a>

```go
func OktaEmailInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaOtpInput`<sup>Optional</sup> <a name="OktaOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput"></a>

```go
func OktaOtpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPasswordInput`<sup>Optional</sup> <a name="OktaPasswordInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput"></a>

```go
func OktaPasswordInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPushInput`<sup>Optional</sup> <a name="OktaPushInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput"></a>

```go
func OktaPushInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaQuestionInput`<sup>Optional</sup> <a name="OktaQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput"></a>

```go
func OktaQuestionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaSmsInput`<sup>Optional</sup> <a name="OktaSmsInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput"></a>

```go
func OktaSmsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaVerifyInput`<sup>Optional</sup> <a name="OktaVerifyInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput"></a>

```go
func OktaVerifyInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnpremMfaInput`<sup>Optional</sup> <a name="OnpremMfaInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput"></a>

```go
func OnpremMfaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RsaTokenInput`<sup>Optional</sup> <a name="RsaTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput"></a>

```go
func RsaTokenInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityQuestionInput`<sup>Optional</sup> <a name="SecurityQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput"></a>

```go
func SecurityQuestionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SymantecVipInput`<sup>Optional</sup> <a name="SymantecVipInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput"></a>

```go
func SymantecVipInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebauthnInput`<sup>Optional</sup> <a name="WebauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput"></a>

```go
func WebauthnInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `YubikeyTokenInput`<sup>Optional</sup> <a name="YubikeyTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput"></a>

```go
func YubikeyTokenInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Duo`<sup>Required</sup> <a name="Duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo"></a>

```go
func Duo() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdp`<sup>Required</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp"></a>

```go
func ExternalIdp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoU2F`<sup>Required</sup> <a name="FidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F"></a>

```go
func FidoU2F() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoWebauthn`<sup>Required</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn"></a>

```go
func FidoWebauthn() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GoogleOtp`<sup>Required</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp"></a>

```go
func GoogleOtp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded"></a>

```go
func GroupsIncluded() *[]*string
```

- *Type:* *[]*string

---

##### `Hotp`<sup>Required</sup> <a name="Hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp"></a>

```go
func Hotp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsOie`<sup>Required</sup> <a name="IsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie"></a>

```go
func IsOie() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OktaCall`<sup>Required</sup> <a name="OktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall"></a>

```go
func OktaCall() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaEmail`<sup>Required</sup> <a name="OktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail"></a>

```go
func OktaEmail() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaOtp`<sup>Required</sup> <a name="OktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp"></a>

```go
func OktaOtp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPassword`<sup>Required</sup> <a name="OktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword"></a>

```go
func OktaPassword() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPush`<sup>Required</sup> <a name="OktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush"></a>

```go
func OktaPush() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaQuestion`<sup>Required</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion"></a>

```go
func OktaQuestion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaSms`<sup>Required</sup> <a name="OktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms"></a>

```go
func OktaSms() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaVerify`<sup>Required</sup> <a name="OktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify"></a>

```go
func OktaVerify() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnpremMfa`<sup>Required</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa"></a>

```go
func OnpremMfa() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber"></a>

```go
func PhoneNumber() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RsaToken`<sup>Required</sup> <a name="RsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken"></a>

```go
func RsaToken() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityQuestion`<sup>Required</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion"></a>

```go
func SecurityQuestion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SymantecVip`<sup>Required</sup> <a name="SymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip"></a>

```go
func SymantecVip() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Webauthn`<sup>Required</sup> <a name="Webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn"></a>

```go
func Webauthn() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `YubikeyToken`<sup>Required</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken"></a>

```go
func YubikeyToken() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyConfig <a name="MfaPolicyConfig" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/mfapolicy"

&mfapolicy.MfaPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Duo: *map[string]*string,
	ExternalIdp: *map[string]*string,
	FidoU2F: *map[string]*string,
	FidoWebauthn: *map[string]*string,
	GoogleOtp: *map[string]*string,
	GroupsIncluded: *[]*string,
	Hotp: *map[string]*string,
	Id: *string,
	IsOie: interface{},
	OktaCall: *map[string]*string,
	OktaEmail: *map[string]*string,
	OktaOtp: *map[string]*string,
	OktaPassword: *map[string]*string,
	OktaPush: *map[string]*string,
	OktaQuestion: *map[string]*string,
	OktaSms: *map[string]*string,
	OktaVerify: *map[string]*string,
	OnpremMfa: *map[string]*string,
	PhoneNumber: *map[string]*string,
	Priority: *f64,
	RsaToken: *map[string]*string,
	SecurityQuestion: *map[string]*string,
	Status: *string,
	SymantecVip: *map[string]*string,
	Webauthn: *map[string]*string,
	YubikeyToken: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo">Duo</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp">ExternalIdp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F">FidoU2F</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn">FidoWebauthn</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp">GoogleOtp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp">Hotp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie">IsOie</a></code> | <code>interface{}</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall">OktaCall</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail">OktaEmail</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp">OktaOtp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword">OktaPassword</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush">OktaPush</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion">OktaQuestion</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms">OktaSms</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify">OktaVerify</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa">OnpremMfa</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber">PhoneNumber</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken">RsaToken</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion">SecurityQuestion</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status">Status</a></code> | <code>*string</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip">SymantecVip</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn">Webauthn</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken">YubikeyToken</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#name MfaPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#description MfaPolicy#description}

---

##### `Duo`<sup>Optional</sup> <a name="Duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo"></a>

```go
Duo *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}.

---

##### `ExternalIdp`<sup>Optional</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp"></a>

```go
ExternalIdp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}.

---

##### `FidoU2F`<sup>Optional</sup> <a name="FidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F"></a>

```go
FidoU2F *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}.

---

##### `FidoWebauthn`<sup>Optional</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn"></a>

```go
FidoWebauthn *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}.

---

##### `GoogleOtp`<sup>Optional</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp"></a>

```go
GoogleOtp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}.

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded"></a>

```go
GroupsIncluded *[]*string
```

- *Type:* *[]*string

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#groups_included MfaPolicy#groups_included}

---

##### `Hotp`<sup>Optional</sup> <a name="Hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp"></a>

```go
Hotp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOie`<sup>Optional</sup> <a name="IsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie"></a>

```go
IsOie interface{}
```

- *Type:* interface{}

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#is_oie MfaPolicy#is_oie}

---

##### `OktaCall`<sup>Optional</sup> <a name="OktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall"></a>

```go
OktaCall *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}.

---

##### `OktaEmail`<sup>Optional</sup> <a name="OktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail"></a>

```go
OktaEmail *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}.

---

##### `OktaOtp`<sup>Optional</sup> <a name="OktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp"></a>

```go
OktaOtp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}.

---

##### `OktaPassword`<sup>Optional</sup> <a name="OktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword"></a>

```go
OktaPassword *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}.

---

##### `OktaPush`<sup>Optional</sup> <a name="OktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush"></a>

```go
OktaPush *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}.

---

##### `OktaQuestion`<sup>Optional</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion"></a>

```go
OktaQuestion *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}.

---

##### `OktaSms`<sup>Optional</sup> <a name="OktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms"></a>

```go
OktaSms *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}.

---

##### `OktaVerify`<sup>Optional</sup> <a name="OktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify"></a>

```go
OktaVerify *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}.

---

##### `OnpremMfa`<sup>Optional</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa"></a>

```go
OnpremMfa *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber"></a>

```go
PhoneNumber *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#priority MfaPolicy#priority}

---

##### `RsaToken`<sup>Optional</sup> <a name="RsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken"></a>

```go
RsaToken *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}.

---

##### `SecurityQuestion`<sup>Optional</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion"></a>

```go
SecurityQuestion *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#status MfaPolicy#status}

---

##### `SymantecVip`<sup>Optional</sup> <a name="SymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip"></a>

```go
SymantecVip *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}.

---

##### `Webauthn`<sup>Optional</sup> <a name="Webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn"></a>

```go
Webauthn *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}.

---

##### `YubikeyToken`<sup>Optional</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken"></a>

```go
YubikeyToken *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}.

---



