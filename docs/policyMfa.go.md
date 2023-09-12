# `okta_policy_mfa`

Refer to the Terraform Registory for docs: [`okta_policy_mfa`](https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa).

# `policyMfa` Submodule <a name="`policyMfa` Submodule" id="@cdktf/provider-okta.policyMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfa <a name="PolicyMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa okta_policy_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policymfa"

policymfa.NewPolicyMfa(scope Construct, id *string, config PolicyMfaConfig) PolicyMfa
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig">PolicyMfaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig">PolicyMfaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo">ResetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp">ResetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F">ResetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn">ResetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp">ResetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded">ResetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp">ResetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie">ResetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall">ResetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail">ResetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp">ResetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword">ResetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush">ResetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion">ResetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms">ResetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify">ResetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa">ResetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken">ResetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion">ResetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip">ResetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn">ResetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken">ResetYubikeyToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDuo` <a name="ResetDuo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo"></a>

```go
func ResetDuo()
```

##### `ResetExternalIdp` <a name="ResetExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp"></a>

```go
func ResetExternalIdp()
```

##### `ResetFidoU2F` <a name="ResetFidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F"></a>

```go
func ResetFidoU2F()
```

##### `ResetFidoWebauthn` <a name="ResetFidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn"></a>

```go
func ResetFidoWebauthn()
```

##### `ResetGoogleOtp` <a name="ResetGoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp"></a>

```go
func ResetGoogleOtp()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded"></a>

```go
func ResetGroupsIncluded()
```

##### `ResetHotp` <a name="ResetHotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp"></a>

```go
func ResetHotp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetId"></a>

```go
func ResetId()
```

##### `ResetIsOie` <a name="ResetIsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie"></a>

```go
func ResetIsOie()
```

##### `ResetOktaCall` <a name="ResetOktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall"></a>

```go
func ResetOktaCall()
```

##### `ResetOktaEmail` <a name="ResetOktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail"></a>

```go
func ResetOktaEmail()
```

##### `ResetOktaOtp` <a name="ResetOktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp"></a>

```go
func ResetOktaOtp()
```

##### `ResetOktaPassword` <a name="ResetOktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword"></a>

```go
func ResetOktaPassword()
```

##### `ResetOktaPush` <a name="ResetOktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush"></a>

```go
func ResetOktaPush()
```

##### `ResetOktaQuestion` <a name="ResetOktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion"></a>

```go
func ResetOktaQuestion()
```

##### `ResetOktaSms` <a name="ResetOktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms"></a>

```go
func ResetOktaSms()
```

##### `ResetOktaVerify` <a name="ResetOktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify"></a>

```go
func ResetOktaVerify()
```

##### `ResetOnpremMfa` <a name="ResetOnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa"></a>

```go
func ResetOnpremMfa()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRsaToken` <a name="ResetRsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken"></a>

```go
func ResetRsaToken()
```

##### `ResetSecurityQuestion` <a name="ResetSecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion"></a>

```go
func ResetSecurityQuestion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSymantecVip` <a name="ResetSymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip"></a>

```go
func ResetSymantecVip()
```

##### `ResetWebauthn` <a name="ResetWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn"></a>

```go
func ResetWebauthn()
```

##### `ResetYubikeyToken` <a name="ResetYubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken"></a>

```go
func ResetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policymfa"

policymfa.PolicyMfa_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policymfa"

policymfa.PolicyMfa_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policymfa"

policymfa.PolicyMfa_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput">DuoInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput">ExternalIdpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput">FidoU2FInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput">FidoWebauthnInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput">GoogleOtpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput">HotpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput">IsOieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput">OktaCallInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput">OktaEmailInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput">OktaOtpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput">OktaPasswordInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput">OktaPushInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput">OktaQuestionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput">OktaSmsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput">OktaVerifyInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput">OnpremMfaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput">RsaTokenInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput">SecurityQuestionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput">SymantecVipInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput">WebauthnInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput">YubikeyTokenInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo">Duo</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp">ExternalIdp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F">FidoU2F</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn">FidoWebauthn</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp">GoogleOtp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp">Hotp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie">IsOie</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall">OktaCall</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail">OktaEmail</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp">OktaOtp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword">OktaPassword</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush">OktaPush</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion">OktaQuestion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms">OktaSms</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify">OktaVerify</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa">OnpremMfa</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber">PhoneNumber</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken">RsaToken</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion">SecurityQuestion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip">SymantecVip</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn">Webauthn</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken">YubikeyToken</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DuoInput`<sup>Optional</sup> <a name="DuoInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput"></a>

```go
func DuoInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdpInput`<sup>Optional</sup> <a name="ExternalIdpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput"></a>

```go
func ExternalIdpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoU2FInput`<sup>Optional</sup> <a name="FidoU2FInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput"></a>

```go
func FidoU2FInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoWebauthnInput`<sup>Optional</sup> <a name="FidoWebauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput"></a>

```go
func FidoWebauthnInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GoogleOtpInput`<sup>Optional</sup> <a name="GoogleOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput"></a>

```go
func GoogleOtpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput"></a>

```go
func GroupsIncludedInput() *[]*string
```

- *Type:* *[]*string

---

##### `HotpInput`<sup>Optional</sup> <a name="HotpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput"></a>

```go
func HotpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsOieInput`<sup>Optional</sup> <a name="IsOieInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput"></a>

```go
func IsOieInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OktaCallInput`<sup>Optional</sup> <a name="OktaCallInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput"></a>

```go
func OktaCallInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaEmailInput`<sup>Optional</sup> <a name="OktaEmailInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput"></a>

```go
func OktaEmailInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaOtpInput`<sup>Optional</sup> <a name="OktaOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput"></a>

```go
func OktaOtpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPasswordInput`<sup>Optional</sup> <a name="OktaPasswordInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput"></a>

```go
func OktaPasswordInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPushInput`<sup>Optional</sup> <a name="OktaPushInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput"></a>

```go
func OktaPushInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaQuestionInput`<sup>Optional</sup> <a name="OktaQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput"></a>

```go
func OktaQuestionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaSmsInput`<sup>Optional</sup> <a name="OktaSmsInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput"></a>

```go
func OktaSmsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaVerifyInput`<sup>Optional</sup> <a name="OktaVerifyInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput"></a>

```go
func OktaVerifyInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnpremMfaInput`<sup>Optional</sup> <a name="OnpremMfaInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput"></a>

```go
func OnpremMfaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RsaTokenInput`<sup>Optional</sup> <a name="RsaTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput"></a>

```go
func RsaTokenInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityQuestionInput`<sup>Optional</sup> <a name="SecurityQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput"></a>

```go
func SecurityQuestionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SymantecVipInput`<sup>Optional</sup> <a name="SymantecVipInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput"></a>

```go
func SymantecVipInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebauthnInput`<sup>Optional</sup> <a name="WebauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput"></a>

```go
func WebauthnInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `YubikeyTokenInput`<sup>Optional</sup> <a name="YubikeyTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput"></a>

```go
func YubikeyTokenInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Duo`<sup>Required</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo"></a>

```go
func Duo() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdp`<sup>Required</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp"></a>

```go
func ExternalIdp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoU2F`<sup>Required</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F"></a>

```go
func FidoU2F() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoWebauthn`<sup>Required</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn"></a>

```go
func FidoWebauthn() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GoogleOtp`<sup>Required</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp"></a>

```go
func GoogleOtp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded"></a>

```go
func GroupsIncluded() *[]*string
```

- *Type:* *[]*string

---

##### `Hotp`<sup>Required</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp"></a>

```go
func Hotp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsOie`<sup>Required</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie"></a>

```go
func IsOie() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OktaCall`<sup>Required</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall"></a>

```go
func OktaCall() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaEmail`<sup>Required</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail"></a>

```go
func OktaEmail() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaOtp`<sup>Required</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp"></a>

```go
func OktaOtp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPassword`<sup>Required</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword"></a>

```go
func OktaPassword() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPush`<sup>Required</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush"></a>

```go
func OktaPush() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaQuestion`<sup>Required</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion"></a>

```go
func OktaQuestion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaSms`<sup>Required</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms"></a>

```go
func OktaSms() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaVerify`<sup>Required</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify"></a>

```go
func OktaVerify() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnpremMfa`<sup>Required</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa"></a>

```go
func OnpremMfa() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber"></a>

```go
func PhoneNumber() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RsaToken`<sup>Required</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken"></a>

```go
func RsaToken() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityQuestion`<sup>Required</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion"></a>

```go
func SecurityQuestion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SymantecVip`<sup>Required</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip"></a>

```go
func SymantecVip() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Webauthn`<sup>Required</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn"></a>

```go
func Webauthn() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `YubikeyToken`<sup>Required</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken"></a>

```go
func YubikeyToken() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaConfig <a name="PolicyMfaConfig" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/policymfa"

&policymfa.PolicyMfaConfig {
	Connection: interface{},
	Count: interface{},
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
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name">Name</a></code> | <code>*string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description">Description</a></code> | <code>*string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo">Duo</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#duo PolicyMfa#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp">ExternalIdp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F">FidoU2F</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn">FidoWebauthn</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp">GoogleOtp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>*[]*string</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp">Hotp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#hotp PolicyMfa#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#id PolicyMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie">IsOie</a></code> | <code>interface{}</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall">OktaCall</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail">OktaEmail</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp">OktaOtp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword">OktaPassword</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush">OktaPush</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion">OktaQuestion</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms">OktaSms</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify">OktaVerify</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa">OnpremMfa</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber">PhoneNumber</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority">Priority</a></code> | <code>*f64</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken">RsaToken</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion">SecurityQuestion</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#security_question PolicyMfa#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status">Status</a></code> | <code>*string</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip">SymantecVip</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn">Webauthn</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken">YubikeyToken</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#name PolicyMfa#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#description PolicyMfa#description}

---

##### `Duo`<sup>Optional</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo"></a>

```go
Duo *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#duo PolicyMfa#duo}.

---

##### `ExternalIdp`<sup>Optional</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp"></a>

```go
ExternalIdp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}.

---

##### `FidoU2F`<sup>Optional</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F"></a>

```go
FidoU2F *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}.

---

##### `FidoWebauthn`<sup>Optional</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn"></a>

```go
FidoWebauthn *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}.

---

##### `GoogleOtp`<sup>Optional</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp"></a>

```go
GoogleOtp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}.

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded"></a>

```go
GroupsIncluded *[]*string
```

- *Type:* *[]*string

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#groups_included PolicyMfa#groups_included}

---

##### `Hotp`<sup>Optional</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp"></a>

```go
Hotp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#hotp PolicyMfa#hotp}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#id PolicyMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOie`<sup>Optional</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie"></a>

```go
IsOie interface{}
```

- *Type:* interface{}

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#is_oie PolicyMfa#is_oie}

---

##### `OktaCall`<sup>Optional</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall"></a>

```go
OktaCall *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}.

---

##### `OktaEmail`<sup>Optional</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail"></a>

```go
OktaEmail *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}.

---

##### `OktaOtp`<sup>Optional</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp"></a>

```go
OktaOtp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}.

---

##### `OktaPassword`<sup>Optional</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword"></a>

```go
OktaPassword *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}.

---

##### `OktaPush`<sup>Optional</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush"></a>

```go
OktaPush *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}.

---

##### `OktaQuestion`<sup>Optional</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion"></a>

```go
OktaQuestion *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}.

---

##### `OktaSms`<sup>Optional</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms"></a>

```go
OktaSms *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}.

---

##### `OktaVerify`<sup>Optional</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify"></a>

```go
OktaVerify *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}.

---

##### `OnpremMfa`<sup>Optional</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa"></a>

```go
OnpremMfa *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber"></a>

```go
PhoneNumber *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#priority PolicyMfa#priority}

---

##### `RsaToken`<sup>Optional</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken"></a>

```go
RsaToken *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}.

---

##### `SecurityQuestion`<sup>Optional</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion"></a>

```go
SecurityQuestion *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#security_question PolicyMfa#security_question}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#status PolicyMfa#status}

---

##### `SymantecVip`<sup>Optional</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip"></a>

```go
SymantecVip *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}.

---

##### `Webauthn`<sup>Optional</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn"></a>

```go
Webauthn *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}.

---

##### `YubikeyToken`<sup>Optional</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken"></a>

```go
YubikeyToken *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}.

---



