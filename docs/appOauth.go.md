# `appOauth` Submodule <a name="`appOauth` Submodule" id="@cdktf/provider-okta.appOauth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauth <a name="AppOauth" id="@cdktf/provider-okta.appOauth.AppOauth"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth okta_app_oauth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.NewAppOauth(scope Construct, id *string, config AppOauthConfig) AppOauth
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig">AppOauthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthConfig">AppOauthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim">PutGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putJwks">PutJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation">ResetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret">ResetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientUri">ResetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod">ResetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes">ResetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetJwks">ResetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode">ResetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes">ResetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri">ResetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri">ResetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret">ResetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired">ResetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri">ResetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris">ResetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway">ResetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation">ResetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes">ResetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod">ResetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTosUri">ResetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect">ResetWildcardRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauth.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appOauth.AppOauth.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appOauth.AppOauth.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauth.AppOauth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appOauth.AppOauth.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauth.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauth.AppOauth.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appOauth.AppOauth.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauth.AppOauth.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appOauth.AppOauth.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutGroupsClaim` <a name="PutGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim"></a>

```go
func PutGroupsClaim(value AppOauthGroupsClaim)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `PutJwks` <a name="PutJwks" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks"></a>

```go
func PutJwks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts"></a>

```go
func PutTimeouts(value AppOauthTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson"></a>

```go
func ResetAppSettingsJson()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy"></a>

```go
func ResetAuthenticationPolicy()
```

##### `ResetAutoKeyRotation` <a name="ResetAutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation"></a>

```go
func ResetAutoKeyRotation()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetClientBasicSecret` <a name="ResetClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret"></a>

```go
func ResetClientBasicSecret()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientUri` <a name="ResetClientUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientUri"></a>

```go
func ResetClientUri()
```

##### `ResetConsentMethod` <a name="ResetConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod"></a>

```go
func ResetConsentMethod()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetGrantTypes` <a name="ResetGrantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes"></a>

```go
func ResetGrantTypes()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim"></a>

```go
func ResetGroupsClaim()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appOauth.AppOauth.resetId"></a>

```go
func ResetId()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment"></a>

```go
func ResetImplicitAssignment()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode"></a>

```go
func ResetIssuerMode()
```

##### `ResetJwks` <a name="ResetJwks" id="@cdktf/provider-okta.appOauth.AppOauth.resetJwks"></a>

```go
func ResetJwks()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetJwksUri"></a>

```go
func ResetJwksUri()
```

##### `ResetLoginMode` <a name="ResetLoginMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode"></a>

```go
func ResetLoginMode()
```

##### `ResetLoginScopes` <a name="ResetLoginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes"></a>

```go
func ResetLoginScopes()
```

##### `ResetLoginUri` <a name="ResetLoginUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri"></a>

```go
func ResetLoginUri()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetLogoUri` <a name="ResetLogoUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri"></a>

```go
func ResetLogoUri()
```

##### `ResetOmitSecret` <a name="ResetOmitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret"></a>

```go
func ResetOmitSecret()
```

##### `ResetPkceRequired` <a name="ResetPkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired"></a>

```go
func ResetPkceRequired()
```

##### `ResetPolicyUri` <a name="ResetPolicyUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri"></a>

```go
func ResetPolicyUri()
```

##### `ResetPostLogoutRedirectUris` <a name="ResetPostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris"></a>

```go
func ResetPostLogoutRedirectUris()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-okta.appOauth.AppOauth.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```

##### `ResetRefreshTokenLeeway` <a name="ResetRefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway"></a>

```go
func ResetRefreshTokenLeeway()
```

##### `ResetRefreshTokenRotation` <a name="ResetRefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation"></a>

```go
func ResetRefreshTokenRotation()
```

##### `ResetResponseTypes` <a name="ResetResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes"></a>

```go
func ResetResponseTypes()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTokenEndpointAuthMethod` <a name="ResetTokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod"></a>

```go
func ResetTokenEndpointAuthMethod()
```

##### `ResetTosUri` <a name="ResetTosUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetTosUri"></a>

```go
func ResetTosUri()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

##### `ResetWildcardRedirect` <a name="ResetWildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect"></a>

```go
func ResetWildcardRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppOauth resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.AppOauth_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.AppOauth_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.AppOauth_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appOauth.AppOauth.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.AppOauth_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppOauth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauth.AppOauth.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appOauth.AppOauth.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppOauth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appOauth.AppOauth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppOauth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauth.AppOauth.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppOauth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwks">Jwks</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput">AutoKeyRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput">ClientBasicSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput">ClientUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput">ConsentMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput">GrantTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput">GroupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput">IssuerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput">JwksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksUriInput">JwksUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput">LoginModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput">LoginScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput">LoginUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput">LogoUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput">OmitSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput">PkceRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput">PolicyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput">PostLogoutRedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput">RefreshTokenLeewayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput">RefreshTokenRotationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput">ResponseTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput">TokenEndpointAuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput">TosUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput">WildcardRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUri">ClientUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod">ConsentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksUri">JwksUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginMode">LoginMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUri">LoginUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUri">LogoUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret">OmitSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired">PkceRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUri">PolicyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes">ResponseTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUri">TosUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect">WildcardRedirect</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appOauth.AppOauth.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauth.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauth.AppOauth.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauth.AppOauth.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauth.AppOauth.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauth.AppOauth.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauth.AppOauth.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim"></a>

```go
func GroupsClaim() AppOauthGroupsClaimOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a>

---

##### `Jwks`<sup>Required</sup> <a name="Jwks" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwks"></a>

```go
func Jwks() AppOauthJwksList
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appOauth.AppOauth.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeouts"></a>

```go
func Timeouts() AppOauthTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput"></a>

```go
func AppSettingsJsonInput() *string
```

- *Type:* *string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput"></a>

```go
func AuthenticationPolicyInput() *string
```

- *Type:* *string

---

##### `AutoKeyRotationInput`<sup>Optional</sup> <a name="AutoKeyRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput"></a>

```go
func AutoKeyRotationInput() interface{}
```

- *Type:* interface{}

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `ClientBasicSecretInput`<sup>Optional</sup> <a name="ClientBasicSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput"></a>

```go
func ClientBasicSecretInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientUriInput`<sup>Optional</sup> <a name="ClientUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput"></a>

```go
func ClientUriInput() *string
```

- *Type:* *string

---

##### `ConsentMethodInput`<sup>Optional</sup> <a name="ConsentMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput"></a>

```go
func ConsentMethodInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput"></a>

```go
func GrantTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput"></a>

```go
func GroupsClaimInput() AppOauthGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput"></a>

```go
func ImplicitAssignmentInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput"></a>

```go
func IssuerModeInput() *string
```

- *Type:* *string

---

##### `JwksInput`<sup>Optional</sup> <a name="JwksInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput"></a>

```go
func JwksInput() interface{}
```

- *Type:* interface{}

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksUriInput"></a>

```go
func JwksUriInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LoginModeInput`<sup>Optional</sup> <a name="LoginModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput"></a>

```go
func LoginModeInput() *string
```

- *Type:* *string

---

##### `LoginScopesInput`<sup>Optional</sup> <a name="LoginScopesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput"></a>

```go
func LoginScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginUriInput`<sup>Optional</sup> <a name="LoginUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput"></a>

```go
func LoginUriInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `LogoUriInput`<sup>Optional</sup> <a name="LogoUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput"></a>

```go
func LogoUriInput() *string
```

- *Type:* *string

---

##### `OmitSecretInput`<sup>Optional</sup> <a name="OmitSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput"></a>

```go
func OmitSecretInput() interface{}
```

- *Type:* interface{}

---

##### `PkceRequiredInput`<sup>Optional</sup> <a name="PkceRequiredInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput"></a>

```go
func PkceRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyUriInput`<sup>Optional</sup> <a name="PolicyUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput"></a>

```go
func PolicyUriInput() *string
```

- *Type:* *string

---

##### `PostLogoutRedirectUrisInput`<sup>Optional</sup> <a name="PostLogoutRedirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput"></a>

```go
func PostLogoutRedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenLeewayInput`<sup>Optional</sup> <a name="RefreshTokenLeewayInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput"></a>

```go
func RefreshTokenLeewayInput() *f64
```

- *Type:* *f64

---

##### `RefreshTokenRotationInput`<sup>Optional</sup> <a name="RefreshTokenRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput"></a>

```go
func RefreshTokenRotationInput() *string
```

- *Type:* *string

---

##### `ResponseTypesInput`<sup>Optional</sup> <a name="ResponseTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput"></a>

```go
func ResponseTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="TokenEndpointAuthMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput"></a>

```go
func TokenEndpointAuthMethodInput() *string
```

- *Type:* *string

---

##### `TosUriInput`<sup>Optional</sup> <a name="TosUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput"></a>

```go
func TosUriInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `WildcardRedirectInput`<sup>Optional</sup> <a name="WildcardRedirectInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput"></a>

```go
func WildcardRedirectInput() *string
```

- *Type:* *string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson"></a>

```go
func AppSettingsJson() *string
```

- *Type:* *string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy"></a>

```go
func AuthenticationPolicy() *string
```

- *Type:* *string

---

##### `AutoKeyRotation`<sup>Required</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation"></a>

```go
func AutoKeyRotation() interface{}
```

- *Type:* interface{}

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `ClientBasicSecret`<sup>Required</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret"></a>

```go
func ClientBasicSecret() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientUri`<sup>Required</sup> <a name="ClientUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUri"></a>

```go
func ClientUri() *string
```

- *Type:* *string

---

##### `ConsentMethod`<sup>Required</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod"></a>

```go
func ConsentMethod() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes"></a>

```go
func GrantTypes() *[]*string
```

- *Type:* *[]*string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appOauth.AppOauth.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment"></a>

```go
func ImplicitAssignment() interface{}
```

- *Type:* interface{}

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksUri"></a>

```go
func JwksUri() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appOauth.AppOauth.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginMode"></a>

```go
func LoginMode() *string
```

- *Type:* *string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes"></a>

```go
func LoginScopes() *[]*string
```

- *Type:* *[]*string

---

##### `LoginUri`<sup>Required</sup> <a name="LoginUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUri"></a>

```go
func LoginUri() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.appOauth.AppOauth.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUri"></a>

```go
func LogoUri() *string
```

- *Type:* *string

---

##### `OmitSecret`<sup>Required</sup> <a name="OmitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret"></a>

```go
func OmitSecret() interface{}
```

- *Type:* interface{}

---

##### `PkceRequired`<sup>Required</sup> <a name="PkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired"></a>

```go
func PkceRequired() interface{}
```

- *Type:* interface{}

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUri"></a>

```go
func PolicyUri() *string
```

- *Type:* *string

---

##### `PostLogoutRedirectUris`<sup>Required</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris"></a>

```go
func PostLogoutRedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-okta.appOauth.AppOauth.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenLeeway`<sup>Required</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway"></a>

```go
func RefreshTokenLeeway() *f64
```

- *Type:* *f64

---

##### `RefreshTokenRotation`<sup>Required</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation"></a>

```go
func RefreshTokenRotation() *string
```

- *Type:* *string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes"></a>

```go
func ResponseTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.appOauth.AppOauth.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod"></a>

```go
func TokenEndpointAuthMethod() *string
```

- *Type:* *string

---

##### `TosUri`<sup>Required</sup> <a name="TosUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUri"></a>

```go
func TosUri() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauth.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

##### `WildcardRedirect`<sup>Required</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect"></a>

```go
func WildcardRedirect() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthConfig <a name="AppOauthConfig" id="@cdktf/provider-okta.appOauth.AppOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

&appoauth.AppOauthConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Label: *string,
	Type: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AdminNote: *string,
	AppLinksJson: *string,
	AppSettingsJson: *string,
	AuthenticationPolicy: *string,
	AutoKeyRotation: interface{},
	AutoSubmitToolbar: interface{},
	ClientBasicSecret: *string,
	ClientId: *string,
	ClientUri: *string,
	ConsentMethod: *string,
	EnduserNote: *string,
	GrantTypes: *[]*string,
	GroupsClaim: github.com/cdktf/cdktf-provider-okta-go/okta/v12.appOauth.AppOauthGroupsClaim,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	ImplicitAssignment: interface{},
	IssuerMode: *string,
	Jwks: interface{},
	JwksUri: *string,
	LoginMode: *string,
	LoginScopes: *[]*string,
	LoginUri: *string,
	Logo: *string,
	LogoUri: *string,
	OmitSecret: interface{},
	PkceRequired: interface{},
	PolicyUri: *string,
	PostLogoutRedirectUris: *[]*string,
	Profile: *string,
	RedirectUris: *[]*string,
	RefreshTokenLeeway: *f64,
	RefreshTokenRotation: *string,
	ResponseTypes: *[]*string,
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v12.appOauth.AppOauthTimeouts,
	TokenEndpointAuthMethod: *string,
	TosUri: *string,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
	WildcardRedirect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.type">Type</a></code> | <code>*string</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>interface{}</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>*string</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri">ClientUri</a></code> | <code>*string</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod">ConsentMethod</a></code> | <code>*string</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#id AppOauth#id}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks">Jwks</a></code> | <code>interface{}</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwksUri">JwksUri</a></code> | <code>*string</code> | URL reference to JWKS. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode">LoginMode</a></code> | <code>*string</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri">LoginUri</a></code> | <code>*string</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri">LogoUri</a></code> | <code>*string</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret">OmitSecret</a></code> | <code>interface{}</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired">PkceRequired</a></code> | <code>interface{}</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri">PolicyUri</a></code> | <code>*string</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>*[]*string</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile">Profile</a></code> | <code>*string</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>*f64</code> | *Early Access Property* Grace period for token rotation, required with grant types refresh_token. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>*string</code> | *Early Access Property* Refresh token rotation behavior, required with grant types refresh_token. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes">ResponseTypes</a></code> | <code>*[]*string</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>*string</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri">TosUri</a></code> | <code>*string</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect">WildcardRedirect</a></code> | <code>*string</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#label AppOauth#label}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#type AppOauth#type}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#accessibility_error_redirect_url AppOauth#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#accessibility_login_redirect_url AppOauth#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#accessibility_self_service AppOauth#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#admin_note AppOauth#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#app_links_json AppOauth#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson"></a>

```go
AppSettingsJson *string
```

- *Type:* *string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#app_settings_json AppOauth#app_settings_json}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy"></a>

```go
AuthenticationPolicy *string
```

- *Type:* *string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#authentication_policy AppOauth#authentication_policy}

---

##### `AutoKeyRotation`<sup>Optional</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation"></a>

```go
AutoKeyRotation interface{}
```

- *Type:* interface{}

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#auto_key_rotation AppOauth#auto_key_rotation}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#auto_submit_toolbar AppOauth#auto_submit_toolbar}

---

##### `ClientBasicSecret`<sup>Optional</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret"></a>

```go
ClientBasicSecret *string
```

- *Type:* *string

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#client_basic_secret AppOauth#client_basic_secret}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#client_id AppOauth#client_id}

---

##### `ClientUri`<sup>Optional</sup> <a name="ClientUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri"></a>

```go
ClientUri *string
```

- *Type:* *string

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#client_uri AppOauth#client_uri}

---

##### `ConsentMethod`<sup>Optional</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod"></a>

```go
ConsentMethod *string
```

- *Type:* *string

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#consent_method AppOauth#consent_method}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#enduser_note AppOauth#enduser_note}

---

##### `GrantTypes`<sup>Optional</sup> <a name="GrantTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes"></a>

```go
GrantTypes *[]*string
```

- *Type:* *[]*string

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#grant_types AppOauth#grant_types}

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim"></a>

```go
GroupsClaim AppOauthGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#groups_claim AppOauth#groups_claim}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#hide_ios AppOauth#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#hide_web AppOauth#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#id AppOauth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment"></a>

```go
ImplicitAssignment interface{}
```

- *Type:* interface{}

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#implicit_assignment AppOauth#implicit_assignment}

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode"></a>

```go
IssuerMode *string
```

- *Type:* *string

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#issuer_mode AppOauth#issuer_mode}

---

##### `Jwks`<sup>Optional</sup> <a name="Jwks" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks"></a>

```go
Jwks interface{}
```

- *Type:* interface{}

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#jwks AppOauth#jwks}

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwksUri"></a>

```go
JwksUri *string
```

- *Type:* *string

URL reference to JWKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#jwks_uri AppOauth#jwks_uri}

---

##### `LoginMode`<sup>Optional</sup> <a name="LoginMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode"></a>

```go
LoginMode *string
```

- *Type:* *string

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#login_mode AppOauth#login_mode}

---

##### `LoginScopes`<sup>Optional</sup> <a name="LoginScopes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes"></a>

```go
LoginScopes *[]*string
```

- *Type:* *[]*string

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#login_scopes AppOauth#login_scopes}

---

##### `LoginUri`<sup>Optional</sup> <a name="LoginUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri"></a>

```go
LoginUri *string
```

- *Type:* *string

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#login_uri AppOauth#login_uri}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#logo AppOauth#logo}

---

##### `LogoUri`<sup>Optional</sup> <a name="LogoUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri"></a>

```go
LogoUri *string
```

- *Type:* *string

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#logo_uri AppOauth#logo_uri}

---

##### `OmitSecret`<sup>Optional</sup> <a name="OmitSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret"></a>

```go
OmitSecret interface{}
```

- *Type:* interface{}

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#omit_secret AppOauth#omit_secret}

---

##### `PkceRequired`<sup>Optional</sup> <a name="PkceRequired" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired"></a>

```go
PkceRequired interface{}
```

- *Type:* interface{}

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#pkce_required AppOauth#pkce_required}

---

##### `PolicyUri`<sup>Optional</sup> <a name="PolicyUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri"></a>

```go
PolicyUri *string
```

- *Type:* *string

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#policy_uri AppOauth#policy_uri}

---

##### `PostLogoutRedirectUris`<sup>Optional</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris"></a>

```go
PostLogoutRedirectUris *[]*string
```

- *Type:* *[]*string

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#post_logout_redirect_uris AppOauth#post_logout_redirect_uris}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#profile AppOauth#profile}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#redirect_uris AppOauth#redirect_uris}

---

##### `RefreshTokenLeeway`<sup>Optional</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway"></a>

```go
RefreshTokenLeeway *f64
```

- *Type:* *f64

*Early Access Property* Grace period for token rotation, required with grant types refresh_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#refresh_token_leeway AppOauth#refresh_token_leeway}

---

##### `RefreshTokenRotation`<sup>Optional</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation"></a>

```go
RefreshTokenRotation *string
```

- *Type:* *string

*Early Access Property* Refresh token rotation behavior, required with grant types refresh_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#refresh_token_rotation AppOauth#refresh_token_rotation}

---

##### `ResponseTypes`<sup>Optional</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes"></a>

```go
ResponseTypes *[]*string
```

- *Type:* *[]*string

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#response_types AppOauth#response_types}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#status AppOauth#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts"></a>

```go
Timeouts AppOauthTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#timeouts AppOauth#timeouts}

---

##### `TokenEndpointAuthMethod`<sup>Optional</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod"></a>

```go
TokenEndpointAuthMethod *string
```

- *Type:* *string

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#token_endpoint_auth_method AppOauth#token_endpoint_auth_method}

---

##### `TosUri`<sup>Optional</sup> <a name="TosUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri"></a>

```go
TosUri *string
```

- *Type:* *string

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#tos_uri AppOauth#tos_uri}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#user_name_template AppOauth#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#user_name_template_push_status AppOauth#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#user_name_template_suffix AppOauth#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#user_name_template_type AppOauth#user_name_template_type}

---

##### `WildcardRedirect`<sup>Optional</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect"></a>

```go
WildcardRedirect *string
```

- *Type:* *string

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#wildcard_redirect AppOauth#wildcard_redirect}

---

### AppOauthGroupsClaim <a name="AppOauthGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

&appoauth.AppOauthGroupsClaim {
	Name: *string,
	Type: *string,
	Value: *string,
	FilterType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name">Name</a></code> | <code>*string</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type">Type</a></code> | <code>*string</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value">Value</a></code> | <code>*string</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType">FilterType</a></code> | <code>*string</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#name AppOauth#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type"></a>

```go
Type *string
```

- *Type:* *string

Groups claim type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#type AppOauth#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#value AppOauth#value}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#filter_type AppOauth#filter_type}

---

### AppOauthJwks <a name="AppOauthJwks" id="@cdktf/provider-okta.appOauth.AppOauthJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthJwks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

&appoauth.AppOauthJwks {
	Kid: *string,
	Kty: *string,
	E: *string,
	N: *string,
	X: *string,
	Y: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid">Kid</a></code> | <code>*string</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty">Kty</a></code> | <code>*string</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.e">E</a></code> | <code>*string</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.n">N</a></code> | <code>*string</code> | RSA Modulus. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.x">X</a></code> | <code>*string</code> | X coordinate of the elliptic curve point. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.y">Y</a></code> | <code>*string</code> | Y coordinate of the elliptic curve point. |

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid"></a>

```go
Kid *string
```

- *Type:* *string

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#kid AppOauth#kid}

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty"></a>

```go
Kty *string
```

- *Type:* *string

Key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#kty AppOauth#kty}

---

##### `E`<sup>Optional</sup> <a name="E" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.e"></a>

```go
E *string
```

- *Type:* *string

RSA Exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#e AppOauth#e}

---

##### `N`<sup>Optional</sup> <a name="N" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.n"></a>

```go
N *string
```

- *Type:* *string

RSA Modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#n AppOauth#n}

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.x"></a>

```go
X *string
```

- *Type:* *string

X coordinate of the elliptic curve point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#x AppOauth#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.y"></a>

```go
Y *string
```

- *Type:* *string

Y coordinate of the elliptic curve point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#y AppOauth#y}

---

### AppOauthTimeouts <a name="AppOauthTimeouts" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

&appoauth.AppOauthTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#create AppOauth#create}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#read AppOauth#read}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#update AppOauth#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#create AppOauth#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#read AppOauth#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_oauth#update AppOauth#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppOauthGroupsClaimOutputReference <a name="AppOauthGroupsClaimOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.NewAppOauthGroupsClaimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppOauthGroupsClaimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue"></a>

```go
func InternalValue() AppOauthGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---


### AppOauthJwksList <a name="AppOauthJwksList" id="@cdktf/provider-okta.appOauth.AppOauthJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.NewAppOauthJwksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppOauthJwksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get"></a>

```go
func Get(index *f64) AppOauthJwksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppOauthJwksOutputReference <a name="AppOauthJwksOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.NewAppOauthJwksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppOauthJwksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE">ResetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN">ResetN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetE` <a name="ResetE" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE"></a>

```go
func ResetE()
```

##### `ResetN` <a name="ResetN" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN"></a>

```go
func ResetN()
```

##### `ResetX` <a name="ResetX" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetX"></a>

```go
func ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetY"></a>

```go
func ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput">EInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput">KidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput">KtyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput">NInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.xInput">XInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.yInput">YInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e">E</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty">Kty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n">N</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.x">X</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.y">Y</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EInput`<sup>Optional</sup> <a name="EInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput"></a>

```go
func EInput() *string
```

- *Type:* *string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput"></a>

```go
func KidInput() *string
```

- *Type:* *string

---

##### `KtyInput`<sup>Optional</sup> <a name="KtyInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput"></a>

```go
func KtyInput() *string
```

- *Type:* *string

---

##### `NInput`<sup>Optional</sup> <a name="NInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput"></a>

```go
func NInput() *string
```

- *Type:* *string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.xInput"></a>

```go
func XInput() *string
```

- *Type:* *string

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.yInput"></a>

```go
func YInput() *string
```

- *Type:* *string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e"></a>

```go
func E() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty"></a>

```go
func Kty() *string
```

- *Type:* *string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n"></a>

```go
func N() *string
```

- *Type:* *string

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.x"></a>

```go
func X() *string
```

- *Type:* *string

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.y"></a>

```go
func Y() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppOauthTimeoutsOutputReference <a name="AppOauthTimeoutsOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/appoauth"

appoauth.NewAppOauthTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppOauthTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



