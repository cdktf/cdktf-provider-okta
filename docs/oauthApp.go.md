# `oauthApp` Submodule <a name="`oauthApp` Submodule" id="@cdktf/provider-okta.oauthApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthApp <a name="OauthApp" id="@cdktf/provider-okta.oauthApp.OauthApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/oauth_app okta_oauth_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.NewOauthApp(scope Construct, id *string, config OauthAppConfig) OauthApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig">OauthAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig">OauthAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim">PutGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putJwks">PutJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation">ResetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret">ResetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri">ResetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod">ResetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId">ResetCustomClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes">ResetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetJwks">ResetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode">ResetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes">ResetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri">ResetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri">ResetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret">ResetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired">ResetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri">ResetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris">ResetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway">ResetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation">ResetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes">ResetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod">ResetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri">ResetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUsers">ResetUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect">ResetWildcardRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.oauthApp.OauthApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGroupsClaim` <a name="PutGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim"></a>

```go
func PutGroupsClaim(value OauthAppGroupsClaim)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `PutJwks` <a name="PutJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks"></a>

```go
func PutJwks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts"></a>

```go
func PutTimeouts(value OauthAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers"></a>

```go
func PutUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson"></a>

```go
func ResetAppSettingsJson()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy"></a>

```go
func ResetAuthenticationPolicy()
```

##### `ResetAutoKeyRotation` <a name="ResetAutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation"></a>

```go
func ResetAutoKeyRotation()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetClientBasicSecret` <a name="ResetClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret"></a>

```go
func ResetClientBasicSecret()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientUri` <a name="ResetClientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri"></a>

```go
func ResetClientUri()
```

##### `ResetConsentMethod` <a name="ResetConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod"></a>

```go
func ResetConsentMethod()
```

##### `ResetCustomClientId` <a name="ResetCustomClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId"></a>

```go
func ResetCustomClientId()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetGrantTypes` <a name="ResetGrantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes"></a>

```go
func ResetGrantTypes()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroups"></a>

```go
func ResetGroups()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim"></a>

```go
func ResetGroupsClaim()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetId"></a>

```go
func ResetId()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment"></a>

```go
func ResetImplicitAssignment()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode"></a>

```go
func ResetIssuerMode()
```

##### `ResetJwks` <a name="ResetJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.resetJwks"></a>

```go
func ResetJwks()
```

##### `ResetLoginMode` <a name="ResetLoginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode"></a>

```go
func ResetLoginMode()
```

##### `ResetLoginScopes` <a name="ResetLoginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes"></a>

```go
func ResetLoginScopes()
```

##### `ResetLoginUri` <a name="ResetLoginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri"></a>

```go
func ResetLoginUri()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetLogoUri` <a name="ResetLogoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri"></a>

```go
func ResetLogoUri()
```

##### `ResetOmitSecret` <a name="ResetOmitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret"></a>

```go
func ResetOmitSecret()
```

##### `ResetPkceRequired` <a name="ResetPkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired"></a>

```go
func ResetPkceRequired()
```

##### `ResetPolicyUri` <a name="ResetPolicyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri"></a>

```go
func ResetPolicyUri()
```

##### `ResetPostLogoutRedirectUris` <a name="ResetPostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris"></a>

```go
func ResetPostLogoutRedirectUris()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-okta.oauthApp.OauthApp.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```

##### `ResetRefreshTokenLeeway` <a name="ResetRefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway"></a>

```go
func ResetRefreshTokenLeeway()
```

##### `ResetRefreshTokenRotation` <a name="ResetRefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation"></a>

```go
func ResetRefreshTokenRotation()
```

##### `ResetResponseTypes` <a name="ResetResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes"></a>

```go
func ResetResponseTypes()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups"></a>

```go
func ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers"></a>

```go
func ResetSkipUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTokenEndpointAuthMethod` <a name="ResetTokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod"></a>

```go
func ResetTokenEndpointAuthMethod()
```

##### `ResetTosUri` <a name="ResetTosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri"></a>

```go
func ResetTosUri()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUsers"></a>

```go
func ResetUsers()
```

##### `ResetWildcardRedirect` <a name="ResetWildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect"></a>

```go
func ResetWildcardRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.OauthApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.OauthApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.OauthApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwks">Jwks</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput">AutoKeyRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput">ClientBasicSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput">ClientUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput">ConsentMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput">CustomClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput">GrantTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput">GroupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput">GroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput">IssuerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput">JwksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput">LoginModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput">LoginScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput">LoginUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput">LogoUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput">OmitSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput">PkceRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput">PolicyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput">PostLogoutRedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput">RefreshTokenLeewayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput">RefreshTokenRotationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput">ResponseTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput">TokenEndpointAuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput">TosUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput">UsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput">WildcardRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri">ClientUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod">ConsentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId">CustomClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode">LoginMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri">LoginUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri">LogoUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret">OmitSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired">PkceRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri">PolicyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes">ResponseTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri">TosUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect">WildcardRedirect</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.oauthApp.OauthApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.oauthApp.OauthApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.oauthApp.OauthApp.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.oauthApp.OauthApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim"></a>

```go
func GroupsClaim() OauthAppGroupsClaimOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a>

---

##### `Jwks`<sup>Required</sup> <a name="Jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwks"></a>

```go
func Jwks() OauthAppJwksList
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.oauthApp.OauthApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts"></a>

```go
func Timeouts() OauthAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.oauthApp.OauthApp.property.users"></a>

```go
func Users() OauthAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput"></a>

```go
func AppSettingsJsonInput() *string
```

- *Type:* *string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput"></a>

```go
func AuthenticationPolicyInput() *string
```

- *Type:* *string

---

##### `AutoKeyRotationInput`<sup>Optional</sup> <a name="AutoKeyRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput"></a>

```go
func AutoKeyRotationInput() interface{}
```

- *Type:* interface{}

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `ClientBasicSecretInput`<sup>Optional</sup> <a name="ClientBasicSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput"></a>

```go
func ClientBasicSecretInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientUriInput`<sup>Optional</sup> <a name="ClientUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput"></a>

```go
func ClientUriInput() *string
```

- *Type:* *string

---

##### `ConsentMethodInput`<sup>Optional</sup> <a name="ConsentMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput"></a>

```go
func ConsentMethodInput() *string
```

- *Type:* *string

---

##### `CustomClientIdInput`<sup>Optional</sup> <a name="CustomClientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput"></a>

```go
func CustomClientIdInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput"></a>

```go
func GrantTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput"></a>

```go
func GroupsClaimInput() OauthAppGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput"></a>

```go
func GroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput"></a>

```go
func ImplicitAssignmentInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput"></a>

```go
func IssuerModeInput() *string
```

- *Type:* *string

---

##### `JwksInput`<sup>Optional</sup> <a name="JwksInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput"></a>

```go
func JwksInput() interface{}
```

- *Type:* interface{}

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LoginModeInput`<sup>Optional</sup> <a name="LoginModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput"></a>

```go
func LoginModeInput() *string
```

- *Type:* *string

---

##### `LoginScopesInput`<sup>Optional</sup> <a name="LoginScopesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput"></a>

```go
func LoginScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LoginUriInput`<sup>Optional</sup> <a name="LoginUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput"></a>

```go
func LoginUriInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `LogoUriInput`<sup>Optional</sup> <a name="LogoUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput"></a>

```go
func LogoUriInput() *string
```

- *Type:* *string

---

##### `OmitSecretInput`<sup>Optional</sup> <a name="OmitSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput"></a>

```go
func OmitSecretInput() interface{}
```

- *Type:* interface{}

---

##### `PkceRequiredInput`<sup>Optional</sup> <a name="PkceRequiredInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput"></a>

```go
func PkceRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyUriInput`<sup>Optional</sup> <a name="PolicyUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput"></a>

```go
func PolicyUriInput() *string
```

- *Type:* *string

---

##### `PostLogoutRedirectUrisInput`<sup>Optional</sup> <a name="PostLogoutRedirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput"></a>

```go
func PostLogoutRedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenLeewayInput`<sup>Optional</sup> <a name="RefreshTokenLeewayInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput"></a>

```go
func RefreshTokenLeewayInput() *f64
```

- *Type:* *f64

---

##### `RefreshTokenRotationInput`<sup>Optional</sup> <a name="RefreshTokenRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput"></a>

```go
func RefreshTokenRotationInput() *string
```

- *Type:* *string

---

##### `ResponseTypesInput`<sup>Optional</sup> <a name="ResponseTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput"></a>

```go
func ResponseTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput"></a>

```go
func SkipGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput"></a>

```go
func SkipUsersInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="TokenEndpointAuthMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput"></a>

```go
func TokenEndpointAuthMethodInput() *string
```

- *Type:* *string

---

##### `TosUriInput`<sup>Optional</sup> <a name="TosUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput"></a>

```go
func TosUriInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput"></a>

```go
func UsersInput() interface{}
```

- *Type:* interface{}

---

##### `WildcardRedirectInput`<sup>Optional</sup> <a name="WildcardRedirectInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput"></a>

```go
func WildcardRedirectInput() *string
```

- *Type:* *string

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson"></a>

```go
func AppSettingsJson() *string
```

- *Type:* *string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy"></a>

```go
func AuthenticationPolicy() *string
```

- *Type:* *string

---

##### `AutoKeyRotation`<sup>Required</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation"></a>

```go
func AutoKeyRotation() interface{}
```

- *Type:* interface{}

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `ClientBasicSecret`<sup>Required</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret"></a>

```go
func ClientBasicSecret() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientUri`<sup>Required</sup> <a name="ClientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri"></a>

```go
func ClientUri() *string
```

- *Type:* *string

---

##### `ConsentMethod`<sup>Required</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod"></a>

```go
func ConsentMethod() *string
```

- *Type:* *string

---

##### `CustomClientId`<sup>Required</sup> <a name="CustomClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId"></a>

```go
func CustomClientId() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes"></a>

```go
func GrantTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment"></a>

```go
func ImplicitAssignment() interface{}
```

- *Type:* interface{}

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.oauthApp.OauthApp.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `LoginMode`<sup>Required</sup> <a name="LoginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode"></a>

```go
func LoginMode() *string
```

- *Type:* *string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes"></a>

```go
func LoginScopes() *[]*string
```

- *Type:* *[]*string

---

##### `LoginUri`<sup>Required</sup> <a name="LoginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri"></a>

```go
func LoginUri() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri"></a>

```go
func LogoUri() *string
```

- *Type:* *string

---

##### `OmitSecret`<sup>Required</sup> <a name="OmitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret"></a>

```go
func OmitSecret() interface{}
```

- *Type:* interface{}

---

##### `PkceRequired`<sup>Required</sup> <a name="PkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired"></a>

```go
func PkceRequired() interface{}
```

- *Type:* interface{}

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri"></a>

```go
func PolicyUri() *string
```

- *Type:* *string

---

##### `PostLogoutRedirectUris`<sup>Required</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris"></a>

```go
func PostLogoutRedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `RefreshTokenLeeway`<sup>Required</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway"></a>

```go
func RefreshTokenLeeway() *f64
```

- *Type:* *f64

---

##### `RefreshTokenRotation`<sup>Required</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation"></a>

```go
func RefreshTokenRotation() *string
```

- *Type:* *string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes"></a>

```go
func ResponseTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups"></a>

```go
func SkipGroups() interface{}
```

- *Type:* interface{}

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers"></a>

```go
func SkipUsers() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.oauthApp.OauthApp.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod"></a>

```go
func TokenEndpointAuthMethod() *string
```

- *Type:* *string

---

##### `TosUri`<sup>Required</sup> <a name="TosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri"></a>

```go
func TosUri() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthApp.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

##### `WildcardRedirect`<sup>Required</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect"></a>

```go
func WildcardRedirect() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthAppConfig <a name="OauthAppConfig" id="@cdktf/provider-okta.oauthApp.OauthAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

&oauthapp.OauthAppConfig {
	Connection: interface{},
	Count: *f64,
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
	CustomClientId: *string,
	EnduserNote: *string,
	GrantTypes: *[]*string,
	Groups: *[]*string,
	GroupsClaim: github.com/cdktf/cdktf-provider-okta-go/okta.oauthApp.OauthAppGroupsClaim,
	HideIos: interface{},
	HideWeb: interface{},
	Id: *string,
	ImplicitAssignment: interface{},
	IssuerMode: *string,
	Jwks: interface{},
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
	SkipGroups: interface{},
	SkipUsers: interface{},
	Status: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta.oauthApp.OauthAppTimeouts,
	TokenEndpointAuthMethod: *string,
	TosUri: *string,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
	Users: interface{},
	WildcardRedirect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type">Type</a></code> | <code>*string</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation">AutoKeyRotation</a></code> | <code>interface{}</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret">ClientBasicSecret</a></code> | <code>*string</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri">ClientUri</a></code> | <code>*string</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod">ConsentMethod</a></code> | <code>*string</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId">CustomClientId</a></code> | <code>*string</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes">GrantTypes</a></code> | <code>*[]*string</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups">Groups</a></code> | <code>*[]*string</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim">GroupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks">Jwks</a></code> | <code>interface{}</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode">LoginMode</a></code> | <code>*string</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri">LoginUri</a></code> | <code>*string</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri">LogoUri</a></code> | <code>*string</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret">OmitSecret</a></code> | <code>interface{}</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired">PkceRequired</a></code> | <code>interface{}</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri">PolicyUri</a></code> | <code>*string</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>*[]*string</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile">Profile</a></code> | <code>*string</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway">RefreshTokenLeeway</a></code> | <code>*f64</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation">RefreshTokenRotation</a></code> | <code>*string</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes">ResponseTypes</a></code> | <code>*[]*string</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>*string</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri">TosUri</a></code> | <code>*string</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users">Users</a></code> | <code>interface{}</code> | users block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect">WildcardRedirect</a></code> | <code>*string</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#label OauthApp#label}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of client application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#type OauthApp#type}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#admin_note OauthApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_links_json OauthApp#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson"></a>

```go
AppSettingsJson *string
```

- *Type:* *string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_settings_json OauthApp#app_settings_json}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy"></a>

```go
AuthenticationPolicy *string
```

- *Type:* *string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#authentication_policy OauthApp#authentication_policy}

---

##### `AutoKeyRotation`<sup>Optional</sup> <a name="AutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation"></a>

```go
AutoKeyRotation interface{}
```

- *Type:* interface{}

Requested key rotation mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}

---

##### `ClientBasicSecret`<sup>Optional</sup> <a name="ClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret"></a>

```go
ClientBasicSecret *string
```

- *Type:* *string

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_basic_secret OauthApp#client_basic_secret}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_id OauthApp#client_id}

---

##### `ClientUri`<sup>Optional</sup> <a name="ClientUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri"></a>

```go
ClientUri *string
```

- *Type:* *string

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_uri OauthApp#client_uri}

---

##### `ConsentMethod`<sup>Optional</sup> <a name="ConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod"></a>

```go
ConsentMethod *string
```

- *Type:* *string

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#consent_method OauthApp#consent_method}

---

##### `CustomClientId`<sup>Optional</sup> <a name="CustomClientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId"></a>

```go
CustomClientId *string
```

- *Type:* *string

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#custom_client_id OauthApp#custom_client_id}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#enduser_note OauthApp#enduser_note}

---

##### `GrantTypes`<sup>Optional</sup> <a name="GrantTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes"></a>

```go
GrantTypes *[]*string
```

- *Type:* *[]*string

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#grant_types OauthApp#grant_types}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups"></a>

```go
Groups *[]*string
```

- *Type:* *[]*string

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups OauthApp#groups}

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim"></a>

```go
GroupsClaim OauthAppGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups_claim OauthApp#groups_claim}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_ios OauthApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_web OauthApp#hide_web}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment"></a>

```go
ImplicitAssignment interface{}
```

- *Type:* interface{}

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#implicit_assignment OauthApp#implicit_assignment}

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode"></a>

```go
IssuerMode *string
```

- *Type:* *string

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#issuer_mode OauthApp#issuer_mode}

---

##### `Jwks`<sup>Optional</sup> <a name="Jwks" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks"></a>

```go
Jwks interface{}
```

- *Type:* interface{}

jwks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#jwks OauthApp#jwks}

---

##### `LoginMode`<sup>Optional</sup> <a name="LoginMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode"></a>

```go
LoginMode *string
```

- *Type:* *string

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_mode OauthApp#login_mode}

---

##### `LoginScopes`<sup>Optional</sup> <a name="LoginScopes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes"></a>

```go
LoginScopes *[]*string
```

- *Type:* *[]*string

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_scopes OauthApp#login_scopes}

---

##### `LoginUri`<sup>Optional</sup> <a name="LoginUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri"></a>

```go
LoginUri *string
```

- *Type:* *string

URI that initiates login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_uri OauthApp#login_uri}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo OauthApp#logo}

---

##### `LogoUri`<sup>Optional</sup> <a name="LogoUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri"></a>

```go
LogoUri *string
```

- *Type:* *string

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo_uri OauthApp#logo_uri}

---

##### `OmitSecret`<sup>Optional</sup> <a name="OmitSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret"></a>

```go
OmitSecret interface{}
```

- *Type:* interface{}

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#omit_secret OauthApp#omit_secret}

---

##### `PkceRequired`<sup>Optional</sup> <a name="PkceRequired" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired"></a>

```go
PkceRequired interface{}
```

- *Type:* interface{}

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#pkce_required OauthApp#pkce_required}

---

##### `PolicyUri`<sup>Optional</sup> <a name="PolicyUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri"></a>

```go
PolicyUri *string
```

- *Type:* *string

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#policy_uri OauthApp#policy_uri}

---

##### `PostLogoutRedirectUris`<sup>Optional</sup> <a name="PostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris"></a>

```go
PostLogoutRedirectUris *[]*string
```

- *Type:* *[]*string

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#profile OauthApp#profile}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#redirect_uris OauthApp#redirect_uris}

---

##### `RefreshTokenLeeway`<sup>Optional</sup> <a name="RefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway"></a>

```go
RefreshTokenLeeway *f64
```

- *Type:* *f64

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}

---

##### `RefreshTokenRotation`<sup>Optional</sup> <a name="RefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation"></a>

```go
RefreshTokenRotation *string
```

- *Type:* *string

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}

---

##### `ResponseTypes`<sup>Optional</sup> <a name="ResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes"></a>

```go
ResponseTypes *[]*string
```

- *Type:* *[]*string

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#response_types OauthApp#response_types}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups"></a>

```go
SkipGroups interface{}
```

- *Type:* interface{}

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_groups OauthApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers"></a>

```go
SkipUsers interface{}
```

- *Type:* interface{}

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_users OauthApp#skip_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#status OauthApp#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts"></a>

```go
Timeouts OauthAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#timeouts OauthApp#timeouts}

---

##### `TokenEndpointAuthMethod`<sup>Optional</sup> <a name="TokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod"></a>

```go
TokenEndpointAuthMethod *string
```

- *Type:* *string

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}

---

##### `TosUri`<sup>Optional</sup> <a name="TosUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri"></a>

```go
TosUri *string
```

- *Type:* *string

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#tos_uri OauthApp#tos_uri}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template OauthApp#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_type OauthApp#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users"></a>

```go
Users interface{}
```

- *Type:* interface{}

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#users OauthApp#users}

---

##### `WildcardRedirect`<sup>Optional</sup> <a name="WildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect"></a>

```go
WildcardRedirect *string
```

- *Type:* *string

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}

---

### OauthAppGroupsClaim <a name="OauthAppGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

&oauthapp.OauthAppGroupsClaim {
	Name: *string,
	Type: *string,
	Value: *string,
	FilterType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name">Name</a></code> | <code>*string</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type">Type</a></code> | <code>*string</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value">Value</a></code> | <code>*string</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType">FilterType</a></code> | <code>*string</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#name OauthApp#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type"></a>

```go
Type *string
```

- *Type:* *string

Groups claim type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#type OauthApp#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#value OauthApp#value}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#filter_type OauthApp#filter_type}

---

### OauthAppJwks <a name="OauthAppJwks" id="@cdktf/provider-okta.oauthApp.OauthAppJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

&oauthapp.OauthAppJwks {
	Kid: *string,
	Kty: *string,
	E: *string,
	N: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid">Kid</a></code> | <code>*string</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty">Kty</a></code> | <code>*string</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e">E</a></code> | <code>*string</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n">N</a></code> | <code>*string</code> | RSA Modulus. |

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid"></a>

```go
Kid *string
```

- *Type:* *string

Key ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#kid OauthApp#kid}

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty"></a>

```go
Kty *string
```

- *Type:* *string

Key type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#kty OauthApp#kty}

---

##### `E`<sup>Optional</sup> <a name="E" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e"></a>

```go
E *string
```

- *Type:* *string

RSA Exponent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#e OauthApp#e}

---

##### `N`<sup>Optional</sup> <a name="N" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n"></a>

```go
N *string
```

- *Type:* *string

RSA Modulus.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#n OauthApp#n}

---

### OauthAppTimeouts <a name="OauthAppTimeouts" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

&oauthapp.OauthAppTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#create OauthApp#create}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#read OauthApp#read}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#update OauthApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#create OauthApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#read OauthApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#update OauthApp#update}.

---

### OauthAppUsers <a name="OauthAppUsers" id="@cdktf/provider-okta.oauthApp.OauthAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

&oauthapp.OauthAppUsers {
	Id: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id">Id</a></code> | <code>*string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password">Password</a></code> | <code>*string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username">Username</a></code> | <code>*string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id"></a>

```go
Id *string
```

- *Type:* *string

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#password OauthApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#username OauthApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthAppGroupsClaimOutputReference <a name="OauthAppGroupsClaimOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.NewOauthAppGroupsClaimOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OauthAppGroupsClaimOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue"></a>

```go
func InternalValue() OauthAppGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---


### OauthAppJwksList <a name="OauthAppJwksList" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.NewOauthAppJwksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OauthAppJwksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get"></a>

```go
func Get(index *f64) OauthAppJwksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OauthAppJwksOutputReference <a name="OauthAppJwksOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.NewOauthAppJwksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OauthAppJwksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE">ResetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN">ResetN</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetE` <a name="ResetE" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE"></a>

```go
func ResetE()
```

##### `ResetN` <a name="ResetN" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN"></a>

```go
func ResetN()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput">EInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput">KidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput">KtyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput">NInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e">E</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty">Kty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n">N</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EInput`<sup>Optional</sup> <a name="EInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput"></a>

```go
func EInput() *string
```

- *Type:* *string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput"></a>

```go
func KidInput() *string
```

- *Type:* *string

---

##### `KtyInput`<sup>Optional</sup> <a name="KtyInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput"></a>

```go
func KtyInput() *string
```

- *Type:* *string

---

##### `NInput`<sup>Optional</sup> <a name="NInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput"></a>

```go
func NInput() *string
```

- *Type:* *string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e"></a>

```go
func E() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty"></a>

```go
func Kty() *string
```

- *Type:* *string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n"></a>

```go
func N() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OauthAppTimeoutsOutputReference <a name="OauthAppTimeoutsOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.NewOauthAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OauthAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OauthAppUsersList <a name="OauthAppUsersList" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.NewOauthAppUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OauthAppUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get"></a>

```go
func Get(index *f64) OauthAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OauthAppUsersOutputReference <a name="OauthAppUsersOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/oauthapp"

oauthapp.NewOauthAppUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OauthAppUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



