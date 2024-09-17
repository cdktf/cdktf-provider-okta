# `policyMfaDefault` Submodule <a name="`policyMfaDefault` Submodule" id="@cdktf/provider-okta.policyMfaDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfaDefault <a name="PolicyMfaDefault" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default okta_policy_mfa_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policymfadefault"

policymfadefault.NewPolicyMfaDefault(scope Construct, id *string, config PolicyMfaDefaultConfig) PolicyMfaDefault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig">PolicyMfaDefaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig">PolicyMfaDefaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo">ResetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp">ResetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdps">ResetExternalIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F">ResetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn">ResetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp">ResetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp">ResetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie">ResetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall">ResetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail">ResetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp">ResetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword">ResetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush">ResetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion">ResetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms">ResetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify">ResetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa">ResetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken">ResetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion">ResetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip">ResetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn">ResetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken">ResetYubikeyToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDuo` <a name="ResetDuo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo"></a>

```go
func ResetDuo()
```

##### `ResetExternalIdp` <a name="ResetExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp"></a>

```go
func ResetExternalIdp()
```

##### `ResetExternalIdps` <a name="ResetExternalIdps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdps"></a>

```go
func ResetExternalIdps()
```

##### `ResetFidoU2F` <a name="ResetFidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F"></a>

```go
func ResetFidoU2F()
```

##### `ResetFidoWebauthn` <a name="ResetFidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn"></a>

```go
func ResetFidoWebauthn()
```

##### `ResetGoogleOtp` <a name="ResetGoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp"></a>

```go
func ResetGoogleOtp()
```

##### `ResetHotp` <a name="ResetHotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp"></a>

```go
func ResetHotp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId"></a>

```go
func ResetId()
```

##### `ResetIsOie` <a name="ResetIsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie"></a>

```go
func ResetIsOie()
```

##### `ResetOktaCall` <a name="ResetOktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall"></a>

```go
func ResetOktaCall()
```

##### `ResetOktaEmail` <a name="ResetOktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail"></a>

```go
func ResetOktaEmail()
```

##### `ResetOktaOtp` <a name="ResetOktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp"></a>

```go
func ResetOktaOtp()
```

##### `ResetOktaPassword` <a name="ResetOktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword"></a>

```go
func ResetOktaPassword()
```

##### `ResetOktaPush` <a name="ResetOktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush"></a>

```go
func ResetOktaPush()
```

##### `ResetOktaQuestion` <a name="ResetOktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion"></a>

```go
func ResetOktaQuestion()
```

##### `ResetOktaSms` <a name="ResetOktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms"></a>

```go
func ResetOktaSms()
```

##### `ResetOktaVerify` <a name="ResetOktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify"></a>

```go
func ResetOktaVerify()
```

##### `ResetOnpremMfa` <a name="ResetOnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa"></a>

```go
func ResetOnpremMfa()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetRsaToken` <a name="ResetRsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken"></a>

```go
func ResetRsaToken()
```

##### `ResetSecurityQuestion` <a name="ResetSecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion"></a>

```go
func ResetSecurityQuestion()
```

##### `ResetSymantecVip` <a name="ResetSymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip"></a>

```go
func ResetSymantecVip()
```

##### `ResetWebauthn` <a name="ResetWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn"></a>

```go
func ResetWebauthn()
```

##### `ResetYubikeyToken` <a name="ResetYubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken"></a>

```go
func ResetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyMfaDefault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policymfadefault"

policymfadefault.PolicyMfaDefault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policymfadefault"

policymfadefault.PolicyMfaDefault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policymfadefault"

policymfadefault.PolicyMfaDefault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policymfadefault"

policymfadefault.PolicyMfaDefault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PolicyMfaDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PolicyMfaDefault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PolicyMfaDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PolicyMfaDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId">DefaultIncludedGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput">DuoInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput">ExternalIdpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpsInput">ExternalIdpsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput">FidoU2FInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput">FidoWebauthnInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput">GoogleOtpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput">HotpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput">IsOieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput">OktaCallInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput">OktaEmailInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput">OktaOtpInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput">OktaPasswordInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput">OktaPushInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput">OktaQuestionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput">OktaSmsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput">OktaVerifyInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput">OnpremMfaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput">RsaTokenInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput">SecurityQuestionInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput">SymantecVipInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput">WebauthnInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput">YubikeyTokenInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo">Duo</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp">ExternalIdp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdps">ExternalIdps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F">FidoU2F</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn">FidoWebauthn</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp">GoogleOtp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp">Hotp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie">IsOie</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall">OktaCall</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail">OktaEmail</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp">OktaOtp</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword">OktaPassword</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush">OktaPush</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion">OktaQuestion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms">OktaSms</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify">OktaVerify</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa">OnpremMfa</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber">PhoneNumber</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken">RsaToken</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion">SecurityQuestion</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip">SymantecVip</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn">Webauthn</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken">YubikeyToken</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultIncludedGroupId`<sup>Required</sup> <a name="DefaultIncludedGroupId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId"></a>

```go
func DefaultIncludedGroupId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `DuoInput`<sup>Optional</sup> <a name="DuoInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput"></a>

```go
func DuoInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdpInput`<sup>Optional</sup> <a name="ExternalIdpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput"></a>

```go
func ExternalIdpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdpsInput`<sup>Optional</sup> <a name="ExternalIdpsInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpsInput"></a>

```go
func ExternalIdpsInput() interface{}
```

- *Type:* interface{}

---

##### `FidoU2FInput`<sup>Optional</sup> <a name="FidoU2FInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput"></a>

```go
func FidoU2FInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoWebauthnInput`<sup>Optional</sup> <a name="FidoWebauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput"></a>

```go
func FidoWebauthnInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GoogleOtpInput`<sup>Optional</sup> <a name="GoogleOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput"></a>

```go
func GoogleOtpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HotpInput`<sup>Optional</sup> <a name="HotpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput"></a>

```go
func HotpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsOieInput`<sup>Optional</sup> <a name="IsOieInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput"></a>

```go
func IsOieInput() interface{}
```

- *Type:* interface{}

---

##### `OktaCallInput`<sup>Optional</sup> <a name="OktaCallInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput"></a>

```go
func OktaCallInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaEmailInput`<sup>Optional</sup> <a name="OktaEmailInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput"></a>

```go
func OktaEmailInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaOtpInput`<sup>Optional</sup> <a name="OktaOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput"></a>

```go
func OktaOtpInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPasswordInput`<sup>Optional</sup> <a name="OktaPasswordInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput"></a>

```go
func OktaPasswordInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPushInput`<sup>Optional</sup> <a name="OktaPushInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput"></a>

```go
func OktaPushInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaQuestionInput`<sup>Optional</sup> <a name="OktaQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput"></a>

```go
func OktaQuestionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaSmsInput`<sup>Optional</sup> <a name="OktaSmsInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput"></a>

```go
func OktaSmsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaVerifyInput`<sup>Optional</sup> <a name="OktaVerifyInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput"></a>

```go
func OktaVerifyInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnpremMfaInput`<sup>Optional</sup> <a name="OnpremMfaInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput"></a>

```go
func OnpremMfaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RsaTokenInput`<sup>Optional</sup> <a name="RsaTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput"></a>

```go
func RsaTokenInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityQuestionInput`<sup>Optional</sup> <a name="SecurityQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput"></a>

```go
func SecurityQuestionInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SymantecVipInput`<sup>Optional</sup> <a name="SymantecVipInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput"></a>

```go
func SymantecVipInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebauthnInput`<sup>Optional</sup> <a name="WebauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput"></a>

```go
func WebauthnInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `YubikeyTokenInput`<sup>Optional</sup> <a name="YubikeyTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput"></a>

```go
func YubikeyTokenInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Duo`<sup>Required</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo"></a>

```go
func Duo() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdp`<sup>Required</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp"></a>

```go
func ExternalIdp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalIdps`<sup>Required</sup> <a name="ExternalIdps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdps"></a>

```go
func ExternalIdps() interface{}
```

- *Type:* interface{}

---

##### `FidoU2F`<sup>Required</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F"></a>

```go
func FidoU2F() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FidoWebauthn`<sup>Required</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn"></a>

```go
func FidoWebauthn() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GoogleOtp`<sup>Required</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp"></a>

```go
func GoogleOtp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Hotp`<sup>Required</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp"></a>

```go
func Hotp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsOie`<sup>Required</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie"></a>

```go
func IsOie() interface{}
```

- *Type:* interface{}

---

##### `OktaCall`<sup>Required</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall"></a>

```go
func OktaCall() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaEmail`<sup>Required</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail"></a>

```go
func OktaEmail() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaOtp`<sup>Required</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp"></a>

```go
func OktaOtp() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPassword`<sup>Required</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword"></a>

```go
func OktaPassword() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaPush`<sup>Required</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush"></a>

```go
func OktaPush() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaQuestion`<sup>Required</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion"></a>

```go
func OktaQuestion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaSms`<sup>Required</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms"></a>

```go
func OktaSms() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OktaVerify`<sup>Required</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify"></a>

```go
func OktaVerify() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnpremMfa`<sup>Required</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa"></a>

```go
func OnpremMfa() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber"></a>

```go
func PhoneNumber() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RsaToken`<sup>Required</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken"></a>

```go
func RsaToken() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityQuestion`<sup>Required</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion"></a>

```go
func SecurityQuestion() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SymantecVip`<sup>Required</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip"></a>

```go
func SymantecVip() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Webauthn`<sup>Required</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn"></a>

```go
func Webauthn() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `YubikeyToken`<sup>Required</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken"></a>

```go
func YubikeyToken() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaDefaultConfig <a name="PolicyMfaDefaultConfig" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/policymfadefault"

&policymfadefault.PolicyMfaDefaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Duo: *map[string]*string,
	ExternalIdp: *map[string]*string,
	ExternalIdps: interface{},
	FidoU2F: *map[string]*string,
	FidoWebauthn: *map[string]*string,
	GoogleOtp: *map[string]*string,
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
	RsaToken: *map[string]*string,
	SecurityQuestion: *map[string]*string,
	SymantecVip: *map[string]*string,
	Webauthn: *map[string]*string,
	YubikeyToken: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo">Duo</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp">ExternalIdp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdps">ExternalIdps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F">FidoU2F</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn">FidoWebauthn</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp">GoogleOtp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp">Hotp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie">IsOie</a></code> | <code>interface{}</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall">OktaCall</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail">OktaEmail</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp">OktaOtp</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword">OktaPassword</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush">OktaPush</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion">OktaQuestion</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms">OktaSms</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify">OktaVerify</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa">OnpremMfa</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber">PhoneNumber</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken">RsaToken</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion">SecurityQuestion</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip">SymantecVip</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn">Webauthn</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken">YubikeyToken</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Duo`<sup>Optional</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo"></a>

```go
Duo *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}.

---

##### `ExternalIdp`<sup>Optional</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp"></a>

```go
ExternalIdp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}.

---

##### `ExternalIdps`<sup>Optional</sup> <a name="ExternalIdps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdps"></a>

```go
ExternalIdps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}.

---

##### `FidoU2F`<sup>Optional</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F"></a>

```go
FidoU2F *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}.

---

##### `FidoWebauthn`<sup>Optional</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn"></a>

```go
FidoWebauthn *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}.

---

##### `GoogleOtp`<sup>Optional</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp"></a>

```go
GoogleOtp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}.

---

##### `Hotp`<sup>Optional</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp"></a>

```go
Hotp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOie`<sup>Optional</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie"></a>

```go
IsOie interface{}
```

- *Type:* interface{}

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}

---

##### `OktaCall`<sup>Optional</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall"></a>

```go
OktaCall *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}.

---

##### `OktaEmail`<sup>Optional</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail"></a>

```go
OktaEmail *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}.

---

##### `OktaOtp`<sup>Optional</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp"></a>

```go
OktaOtp *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}.

---

##### `OktaPassword`<sup>Optional</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword"></a>

```go
OktaPassword *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}.

---

##### `OktaPush`<sup>Optional</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush"></a>

```go
OktaPush *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}.

---

##### `OktaQuestion`<sup>Optional</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion"></a>

```go
OktaQuestion *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}.

---

##### `OktaSms`<sup>Optional</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms"></a>

```go
OktaSms *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}.

---

##### `OktaVerify`<sup>Optional</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify"></a>

```go
OktaVerify *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}.

---

##### `OnpremMfa`<sup>Optional</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa"></a>

```go
OnpremMfa *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber"></a>

```go
PhoneNumber *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}.

---

##### `RsaToken`<sup>Optional</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken"></a>

```go
RsaToken *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}.

---

##### `SecurityQuestion`<sup>Optional</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion"></a>

```go
SecurityQuestion *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}.

---

##### `SymantecVip`<sup>Optional</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip"></a>

```go
SymantecVip *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}.

---

##### `Webauthn`<sup>Optional</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn"></a>

```go
Webauthn *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}.

---

##### `YubikeyToken`<sup>Optional</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken"></a>

```go
YubikeyToken *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}.

---



