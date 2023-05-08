# `okta_saml_app`

Refer to the Terraform Registory for docs: [`okta_saml_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app).

# `samlApp` Submodule <a name="`samlApp` Submodule" id="@cdktf/provider-okta.samlApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlApp <a name="SamlApp" id="@cdktf/provider-okta.samlApp.SamlApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app okta_saml_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlApp(scope Construct, id *string, config SamlAppConfig) SamlApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig">SamlAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.samlApp.SamlApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppConfig">SamlAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements">PutAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl">ResetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl">ResetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService">ResetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints">ResetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote">ResetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson">ResetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson">ResetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned">ResetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements">ResetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef">ResetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar">ResetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState">ResetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm">ResetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote">ResetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideIos">ResetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb">ResetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn">ResetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer">ResetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment">ResetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId">ResetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid">ResetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp">ResetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed">ResetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned">ResetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled">ResetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion">ResetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate">ResetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer">ResetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl">ResetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer">ResetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl">ResetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat">ResetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate">ResetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate">ResetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus">ResetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix">ResetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType">ResetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.samlApp.SamlApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.samlApp.SamlApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttributeStatements` <a name="PutAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements"></a>

```go
func PutAttributeStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putAttributeStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts"></a>

```go
func PutTimeouts(value SamlAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers"></a>

```go
func PutUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.samlApp.SamlApp.putUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessibilityErrorRedirectUrl` <a name="ResetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityErrorRedirectUrl"></a>

```go
func ResetAccessibilityErrorRedirectUrl()
```

##### `ResetAccessibilityLoginRedirectUrl` <a name="ResetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilityLoginRedirectUrl"></a>

```go
func ResetAccessibilityLoginRedirectUrl()
```

##### `ResetAccessibilitySelfService` <a name="ResetAccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.resetAccessibilitySelfService"></a>

```go
func ResetAccessibilitySelfService()
```

##### `ResetAcsEndpoints` <a name="ResetAcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.resetAcsEndpoints"></a>

```go
func ResetAcsEndpoints()
```

##### `ResetAdminNote` <a name="ResetAdminNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetAdminNote"></a>

```go
func ResetAdminNote()
```

##### `ResetAppLinksJson` <a name="ResetAppLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppLinksJson"></a>

```go
func ResetAppLinksJson()
```

##### `ResetAppSettingsJson` <a name="ResetAppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.resetAppSettingsJson"></a>

```go
func ResetAppSettingsJson()
```

##### `ResetAssertionSigned` <a name="ResetAssertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetAssertionSigned"></a>

```go
func ResetAssertionSigned()
```

##### `ResetAttributeStatements` <a name="ResetAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.resetAttributeStatements"></a>

```go
func ResetAttributeStatements()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-okta.samlApp.SamlApp.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthenticationPolicy"></a>

```go
func ResetAuthenticationPolicy()
```

##### `ResetAuthnContextClassRef` <a name="ResetAuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.resetAuthnContextClassRef"></a>

```go
func ResetAuthnContextClassRef()
```

##### `ResetAutoSubmitToolbar` <a name="ResetAutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.resetAutoSubmitToolbar"></a>

```go
func ResetAutoSubmitToolbar()
```

##### `ResetDefaultRelayState` <a name="ResetDefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.resetDefaultRelayState"></a>

```go
func ResetDefaultRelayState()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-okta.samlApp.SamlApp.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetDigestAlgorithm` <a name="ResetDigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetDigestAlgorithm"></a>

```go
func ResetDigestAlgorithm()
```

##### `ResetEnduserNote` <a name="ResetEnduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.resetEnduserNote"></a>

```go
func ResetEnduserNote()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetGroups"></a>

```go
func ResetGroups()
```

##### `ResetHideIos` <a name="ResetHideIos" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideIos"></a>

```go
func ResetHideIos()
```

##### `ResetHideWeb` <a name="ResetHideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.resetHideWeb"></a>

```go
func ResetHideWeb()
```

##### `ResetHonorForceAuthn` <a name="ResetHonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.resetHonorForceAuthn"></a>

```go
func ResetHonorForceAuthn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.samlApp.SamlApp.resetId"></a>

```go
func ResetId()
```

##### `ResetIdpIssuer` <a name="ResetIdpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetIdpIssuer"></a>

```go
func ResetIdpIssuer()
```

##### `ResetImplicitAssignment` <a name="ResetImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.resetImplicitAssignment"></a>

```go
func ResetImplicitAssignment()
```

##### `ResetInlineHookId` <a name="ResetInlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.resetInlineHookId"></a>

```go
func ResetInlineHookId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetKeyYearsValid` <a name="ResetKeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.resetKeyYearsValid"></a>

```go
func ResetKeyYearsValid()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktf/provider-okta.samlApp.SamlApp.resetLogo"></a>

```go
func ResetLogo()
```

##### `ResetPreconfiguredApp` <a name="ResetPreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.resetPreconfiguredApp"></a>

```go
func ResetPreconfiguredApp()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktf/provider-okta.samlApp.SamlApp.resetRecipient"></a>

```go
func ResetRecipient()
```

##### `ResetRequestCompressed` <a name="ResetRequestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.resetRequestCompressed"></a>

```go
func ResetRequestCompressed()
```

##### `ResetResponseSigned` <a name="ResetResponseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.resetResponseSigned"></a>

```go
func ResetResponseSigned()
```

##### `ResetSamlSignedRequestEnabled` <a name="ResetSamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlSignedRequestEnabled"></a>

```go
func ResetSamlSignedRequestEnabled()
```

##### `ResetSamlVersion` <a name="ResetSamlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.resetSamlVersion"></a>

```go
func ResetSamlVersion()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.resetSignatureAlgorithm"></a>

```go
func ResetSignatureAlgorithm()
```

##### `ResetSingleLogoutCertificate` <a name="ResetSingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutCertificate"></a>

```go
func ResetSingleLogoutCertificate()
```

##### `ResetSingleLogoutIssuer` <a name="ResetSingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutIssuer"></a>

```go
func ResetSingleLogoutIssuer()
```

##### `ResetSingleLogoutUrl` <a name="ResetSingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSingleLogoutUrl"></a>

```go
func ResetSingleLogoutUrl()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipGroups"></a>

```go
func ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetSkipUsers"></a>

```go
func ResetSkipUsers()
```

##### `ResetSpIssuer` <a name="ResetSpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.resetSpIssuer"></a>

```go
func ResetSpIssuer()
```

##### `ResetSsoUrl` <a name="ResetSsoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.resetSsoUrl"></a>

```go
func ResetSsoUrl()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSubjectNameIdFormat` <a name="ResetSubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdFormat"></a>

```go
func ResetSubjectNameIdFormat()
```

##### `ResetSubjectNameIdTemplate` <a name="ResetSubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetSubjectNameIdTemplate"></a>

```go
func ResetSubjectNameIdTemplate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-okta.samlApp.SamlApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserNameTemplate` <a name="ResetUserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplate"></a>

```go
func ResetUserNameTemplate()
```

##### `ResetUserNameTemplatePushStatus` <a name="ResetUserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplatePushStatus"></a>

```go
func ResetUserNameTemplatePushStatus()
```

##### `ResetUserNameTemplateSuffix` <a name="ResetUserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateSuffix"></a>

```go
func ResetUserNameTemplateSuffix()
```

##### `ResetUserNameTemplateType` <a name="ResetUserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.resetUserNameTemplateType"></a>

```go
func ResetUserNameTemplateType()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-okta.samlApp.SamlApp.resetUsers"></a>

```go
func ResetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.SamlApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.SamlApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.SamlApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.samlApp.SamlApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements">AttributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl">EmbedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityKey">EntityKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl">EntityUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.features">Features</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding">HttpPostBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding">HttpRedirectBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl">MetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.users">Users</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput">AccessibilityErrorRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput">AccessibilityLoginRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput">AccessibilitySelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput">AcsEndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput">AdminNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput">AppLinksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput">AppSettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput">AssertionSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput">AttributeStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput">AuthnContextClassRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput">AutoSubmitToolbarInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput">DefaultRelayStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput">DigestAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput">EnduserNoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput">GroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput">HideIosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput">HideWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput">HonorForceAuthnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput">IdpIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput">ImplicitAssignmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput">InlineHookIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput">KeyYearsValidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logoInput">LogoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput">PreconfiguredAppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput">RecipientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput">RequestCompressedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput">ResponseSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput">SamlSignedRequestEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput">SamlVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput">SingleLogoutCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput">SingleLogoutIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput">SingleLogoutUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput">SkipUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput">SpIssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput">SsoUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput">SubjectNameIdFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput">SubjectNameIdTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput">UserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput">UserNameTemplatePushStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput">UserNameTemplateSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput">UserNameTemplateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.usersInput">UsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints">AcsEndpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned">AssertionSigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideIos">HideIos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer">IdpIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid">KeyYearsValid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.recipient">Recipient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed">RequestCompressed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned">ResponseSigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion">SamlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer">SpIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.samlApp.SamlApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.samlApp.SamlApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.samlApp.SamlApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlApp.SamlApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlApp.SamlApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlApp.SamlApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlApp.SamlApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlApp.SamlApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlApp.SamlApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlApp.SamlApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttributeStatements`<sup>Required</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatements"></a>

```go
func AttributeStatements() SamlAppAttributeStatementsList
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList">SamlAppAttributeStatementsList</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `EmbedUrl`<sup>Required</sup> <a name="EmbedUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.embedUrl"></a>

```go
func EmbedUrl() *string
```

- *Type:* *string

---

##### `EntityKey`<sup>Required</sup> <a name="EntityKey" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityKey"></a>

```go
func EntityKey() *string
```

- *Type:* *string

---

##### `EntityUrl`<sup>Required</sup> <a name="EntityUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.entityUrl"></a>

```go
func EntityUrl() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-okta.samlApp.SamlApp.property.features"></a>

```go
func Features() *[]*string
```

- *Type:* *[]*string

---

##### `HttpPostBinding`<sup>Required</sup> <a name="HttpPostBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpPostBinding"></a>

```go
func HttpPostBinding() *string
```

- *Type:* *string

---

##### `HttpRedirectBinding`<sup>Required</sup> <a name="HttpRedirectBinding" id="@cdktf/provider-okta.samlApp.SamlApp.property.httpRedirectBinding"></a>

```go
func HttpRedirectBinding() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-okta.samlApp.SamlApp.property.keys"></a>

```go
func Keys() SamlAppKeysList
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList">SamlAppKeysList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.metadataUrl"></a>

```go
func MetadataUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlApp.SamlApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.samlApp.SamlApp.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeouts"></a>

```go
func Timeouts() SamlAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference">SamlAppTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.samlApp.SamlApp.property.users"></a>

```go
func Users() SamlAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList">SamlAppUsersList</a>

---

##### `AccessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrlInput"></a>

```go
func AccessibilityErrorRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrlInput"></a>

```go
func AccessibilityLoginRedirectUrlInput() *string
```

- *Type:* *string

---

##### `AccessibilitySelfServiceInput`<sup>Optional</sup> <a name="AccessibilitySelfServiceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfServiceInput"></a>

```go
func AccessibilitySelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `AcsEndpointsInput`<sup>Optional</sup> <a name="AcsEndpointsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpointsInput"></a>

```go
func AcsEndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdminNoteInput`<sup>Optional</sup> <a name="AdminNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNoteInput"></a>

```go
func AdminNoteInput() *string
```

- *Type:* *string

---

##### `AppLinksJsonInput`<sup>Optional</sup> <a name="AppLinksJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJsonInput"></a>

```go
func AppLinksJsonInput() *string
```

- *Type:* *string

---

##### `AppSettingsJsonInput`<sup>Optional</sup> <a name="AppSettingsJsonInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJsonInput"></a>

```go
func AppSettingsJsonInput() *string
```

- *Type:* *string

---

##### `AssertionSignedInput`<sup>Optional</sup> <a name="AssertionSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSignedInput"></a>

```go
func AssertionSignedInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeStatementsInput`<sup>Optional</sup> <a name="AttributeStatementsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.attributeStatementsInput"></a>

```go
func AttributeStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicyInput"></a>

```go
func AuthenticationPolicyInput() *string
```

- *Type:* *string

---

##### `AuthnContextClassRefInput`<sup>Optional</sup> <a name="AuthnContextClassRefInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRefInput"></a>

```go
func AuthnContextClassRefInput() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbarInput`<sup>Optional</sup> <a name="AutoSubmitToolbarInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbarInput"></a>

```go
func AutoSubmitToolbarInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultRelayStateInput`<sup>Optional</sup> <a name="DefaultRelayStateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayStateInput"></a>

```go
func DefaultRelayStateInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DigestAlgorithmInput`<sup>Optional</sup> <a name="DigestAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithmInput"></a>

```go
func DigestAlgorithmInput() *string
```

- *Type:* *string

---

##### `EnduserNoteInput`<sup>Optional</sup> <a name="EnduserNoteInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNoteInput"></a>

```go
func EnduserNoteInput() *string
```

- *Type:* *string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.groupsInput"></a>

```go
func GroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HideIosInput`<sup>Optional</sup> <a name="HideIosInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIosInput"></a>

```go
func HideIosInput() interface{}
```

- *Type:* interface{}

---

##### `HideWebInput`<sup>Optional</sup> <a name="HideWebInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWebInput"></a>

```go
func HideWebInput() interface{}
```

- *Type:* interface{}

---

##### `HonorForceAuthnInput`<sup>Optional</sup> <a name="HonorForceAuthnInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthnInput"></a>

```go
func HonorForceAuthnInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpIssuerInput`<sup>Optional</sup> <a name="IdpIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuerInput"></a>

```go
func IdpIssuerInput() *string
```

- *Type:* *string

---

##### `ImplicitAssignmentInput`<sup>Optional</sup> <a name="ImplicitAssignmentInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignmentInput"></a>

```go
func ImplicitAssignmentInput() interface{}
```

- *Type:* interface{}

---

##### `InlineHookIdInput`<sup>Optional</sup> <a name="InlineHookIdInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookIdInput"></a>

```go
func InlineHookIdInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `KeyYearsValidInput`<sup>Optional</sup> <a name="KeyYearsValidInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValidInput"></a>

```go
func KeyYearsValidInput() *f64
```

- *Type:* *f64

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.logoInput"></a>

```go
func LogoInput() *string
```

- *Type:* *string

---

##### `PreconfiguredAppInput`<sup>Optional</sup> <a name="PreconfiguredAppInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredAppInput"></a>

```go
func PreconfiguredAppInput() *string
```

- *Type:* *string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipientInput"></a>

```go
func RecipientInput() *string
```

- *Type:* *string

---

##### `RequestCompressedInput`<sup>Optional</sup> <a name="RequestCompressedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressedInput"></a>

```go
func RequestCompressedInput() interface{}
```

- *Type:* interface{}

---

##### `ResponseSignedInput`<sup>Optional</sup> <a name="ResponseSignedInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSignedInput"></a>

```go
func ResponseSignedInput() interface{}
```

- *Type:* interface{}

---

##### `SamlSignedRequestEnabledInput`<sup>Optional</sup> <a name="SamlSignedRequestEnabledInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabledInput"></a>

```go
func SamlSignedRequestEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SamlVersionInput`<sup>Optional</sup> <a name="SamlVersionInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersionInput"></a>

```go
func SamlVersionInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `SingleLogoutCertificateInput`<sup>Optional</sup> <a name="SingleLogoutCertificateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificateInput"></a>

```go
func SingleLogoutCertificateInput() *string
```

- *Type:* *string

---

##### `SingleLogoutIssuerInput`<sup>Optional</sup> <a name="SingleLogoutIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuerInput"></a>

```go
func SingleLogoutIssuerInput() *string
```

- *Type:* *string

---

##### `SingleLogoutUrlInput`<sup>Optional</sup> <a name="SingleLogoutUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrlInput"></a>

```go
func SingleLogoutUrlInput() *string
```

- *Type:* *string

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroupsInput"></a>

```go
func SkipGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsersInput"></a>

```go
func SkipUsersInput() interface{}
```

- *Type:* interface{}

---

##### `SpIssuerInput`<sup>Optional</sup> <a name="SpIssuerInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuerInput"></a>

```go
func SpIssuerInput() *string
```

- *Type:* *string

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrlInput"></a>

```go
func SsoUrlInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubjectNameIdFormatInput`<sup>Optional</sup> <a name="SubjectNameIdFormatInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormatInput"></a>

```go
func SubjectNameIdFormatInput() *string
```

- *Type:* *string

---

##### `SubjectNameIdTemplateInput`<sup>Optional</sup> <a name="SubjectNameIdTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplateInput"></a>

```go
func SubjectNameIdTemplateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserNameTemplateInput`<sup>Optional</sup> <a name="UserNameTemplateInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateInput"></a>

```go
func UserNameTemplateInput() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatusInput`<sup>Optional</sup> <a name="UserNameTemplatePushStatusInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatusInput"></a>

```go
func UserNameTemplatePushStatusInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffixInput`<sup>Optional</sup> <a name="UserNameTemplateSuffixInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffixInput"></a>

```go
func UserNameTemplateSuffixInput() *string
```

- *Type:* *string

---

##### `UserNameTemplateTypeInput`<sup>Optional</sup> <a name="UserNameTemplateTypeInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateTypeInput"></a>

```go
func UserNameTemplateTypeInput() *string
```

- *Type:* *string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-okta.samlApp.SamlApp.property.usersInput"></a>

```go
func UsersInput() interface{}
```

- *Type:* interface{}

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityErrorRedirectUrl"></a>

```go
func AccessibilityErrorRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilityLoginRedirectUrl"></a>

```go
func AccessibilityLoginRedirectUrl() *string
```

- *Type:* *string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlApp.property.accessibilitySelfService"></a>

```go
func AccessibilitySelfService() interface{}
```

- *Type:* interface{}

---

##### `AcsEndpoints`<sup>Required</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlApp.property.acsEndpoints"></a>

```go
func AcsEndpoints() *[]*string
```

- *Type:* *[]*string

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `AppLinksJson`<sup>Required</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appLinksJson"></a>

```go
func AppLinksJson() *string
```

- *Type:* *string

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlApp.property.appSettingsJson"></a>

```go
func AppSettingsJson() *string
```

- *Type:* *string

---

##### `AssertionSigned`<sup>Required</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.assertionSigned"></a>

```go
func AssertionSigned() interface{}
```

- *Type:* interface{}

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.samlApp.SamlApp.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlApp.property.authenticationPolicy"></a>

```go
func AuthenticationPolicy() *string
```

- *Type:* *string

---

##### `AuthnContextClassRef`<sup>Required</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlApp.property.authnContextClassRef"></a>

```go
func AuthnContextClassRef() *string
```

- *Type:* *string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlApp.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() interface{}
```

- *Type:* interface{}

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlApp.property.defaultRelayState"></a>

```go
func DefaultRelayState() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-okta.samlApp.SamlApp.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DigestAlgorithm`<sup>Required</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.digestAlgorithm"></a>

```go
func DigestAlgorithm() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.samlApp.SamlApp.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.samlApp.SamlApp.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideIos"></a>

```go
func HideIos() interface{}
```

- *Type:* interface{}

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.samlApp.SamlApp.property.hideWeb"></a>

```go
func HideWeb() interface{}
```

- *Type:* interface{}

---

##### `HonorForceAuthn`<sup>Required</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlApp.property.honorForceAuthn"></a>

```go
func HonorForceAuthn() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpIssuer`<sup>Required</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.idpIssuer"></a>

```go
func IdpIssuer() *string
```

- *Type:* *string

---

##### `ImplicitAssignment`<sup>Required</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlApp.property.implicitAssignment"></a>

```go
func ImplicitAssignment() interface{}
```

- *Type:* interface{}

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.samlApp.SamlApp.property.inlineHookId"></a>

```go
func InlineHookId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `KeyYearsValid`<sup>Required</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlApp.property.keyYearsValid"></a>

```go
func KeyYearsValid() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.samlApp.SamlApp.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktf/provider-okta.samlApp.SamlApp.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `PreconfiguredApp`<sup>Required</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlApp.property.preconfiguredApp"></a>

```go
func PreconfiguredApp() *string
```

- *Type:* *string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-okta.samlApp.SamlApp.property.recipient"></a>

```go
func Recipient() *string
```

- *Type:* *string

---

##### `RequestCompressed`<sup>Required</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.samlApp.SamlApp.property.requestCompressed"></a>

```go
func RequestCompressed() interface{}
```

- *Type:* interface{}

---

##### `ResponseSigned`<sup>Required</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.samlApp.SamlApp.property.responseSigned"></a>

```go
func ResponseSigned() interface{}
```

- *Type:* interface{}

---

##### `SamlSignedRequestEnabled`<sup>Required</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlSignedRequestEnabled"></a>

```go
func SamlSignedRequestEnabled() interface{}
```

- *Type:* interface{}

---

##### `SamlVersion`<sup>Required</sup> <a name="SamlVersion" id="@cdktf/provider-okta.samlApp.SamlApp.property.samlVersion"></a>

```go
func SamlVersion() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlApp.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `SingleLogoutCertificate`<sup>Required</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutCertificate"></a>

```go
func SingleLogoutCertificate() *string
```

- *Type:* *string

---

##### `SingleLogoutIssuer`<sup>Required</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutIssuer"></a>

```go
func SingleLogoutIssuer() *string
```

- *Type:* *string

---

##### `SingleLogoutUrl`<sup>Required</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.singleLogoutUrl"></a>

```go
func SingleLogoutUrl() *string
```

- *Type:* *string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipGroups"></a>

```go
func SkipGroups() interface{}
```

- *Type:* interface{}

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.samlApp.SamlApp.property.skipUsers"></a>

```go
func SkipUsers() interface{}
```

- *Type:* interface{}

---

##### `SpIssuer`<sup>Required</sup> <a name="SpIssuer" id="@cdktf/provider-okta.samlApp.SamlApp.property.spIssuer"></a>

```go
func SpIssuer() *string
```

- *Type:* *string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlApp.SamlApp.property.ssoUrl"></a>

```go
func SsoUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.samlApp.SamlApp.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubjectNameIdFormat`<sup>Required</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdFormat"></a>

```go
func SubjectNameIdFormat() *string
```

- *Type:* *string

---

##### `SubjectNameIdTemplate`<sup>Required</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.subjectNameIdTemplate"></a>

```go
func SubjectNameIdTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplate"></a>

```go
func UserNameTemplate() *string
```

- *Type:* *string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplatePushStatus"></a>

```go
func UserNameTemplatePushStatus() *string
```

- *Type:* *string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateSuffix"></a>

```go
func UserNameTemplateSuffix() *string
```

- *Type:* *string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlApp.property.userNameTemplateType"></a>

```go
func UserNameTemplateType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.samlApp.SamlApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAppAttributeStatements <a name="SamlAppAttributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

&samlapp.SamlAppAttributeStatements {
	Name: *string,
	FilterType: *string,
	FilterValue: *string,
	Namespace: *string,
	Type: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name">Name</a></code> | <code>*string</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType">FilterType</a></code> | <code>*string</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue">FilterValue</a></code> | <code>*string</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace">Namespace</a></code> | <code>*string</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type">Type</a></code> | <code>*string</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#values SamlApp#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.name"></a>

```go
Name *string
```

- *Type:* *string

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#name SamlApp#name}

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

Type of group attribute filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#filter_type SamlApp#filter_type}

---

##### `FilterValue`<sup>Optional</sup> <a name="FilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.filterValue"></a>

```go
FilterValue *string
```

- *Type:* *string

Filter value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#filter_value SamlApp#filter_value}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The name format of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#namespace SamlApp#namespace}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of attribute statements object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#type SamlApp#type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatements.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#values SamlApp#values}.

---

### SamlAppConfig <a name="SamlAppConfig" id="@cdktf/provider-okta.samlApp.SamlAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

&samlapp.SamlAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Label: *string,
	AccessibilityErrorRedirectUrl: *string,
	AccessibilityLoginRedirectUrl: *string,
	AccessibilitySelfService: interface{},
	AcsEndpoints: *[]*string,
	AdminNote: *string,
	AppLinksJson: *string,
	AppSettingsJson: *string,
	AssertionSigned: interface{},
	AttributeStatements: interface{},
	Audience: *string,
	AuthenticationPolicy: *string,
	AuthnContextClassRef: *string,
	AutoSubmitToolbar: interface{},
	DefaultRelayState: *string,
	Destination: *string,
	DigestAlgorithm: *string,
	EnduserNote: *string,
	Groups: *[]*string,
	HideIos: interface{},
	HideWeb: interface{},
	HonorForceAuthn: interface{},
	Id: *string,
	IdpIssuer: *string,
	ImplicitAssignment: interface{},
	InlineHookId: *string,
	KeyName: *string,
	KeyYearsValid: *f64,
	Logo: *string,
	PreconfiguredApp: *string,
	Recipient: *string,
	RequestCompressed: interface{},
	ResponseSigned: interface{},
	SamlSignedRequestEnabled: interface{},
	SamlVersion: *string,
	SignatureAlgorithm: *string,
	SingleLogoutCertificate: *string,
	SingleLogoutIssuer: *string,
	SingleLogoutUrl: *string,
	SkipGroups: interface{},
	SkipUsers: interface{},
	SpIssuer: *string,
	SsoUrl: *string,
	Status: *string,
	SubjectNameIdFormat: *string,
	SubjectNameIdTemplate: *string,
	Timeouts: github.com/cdktf/cdktf-provider-okta-go/okta/v7.samlApp.SamlAppTimeouts,
	UserNameTemplate: *string,
	UserNameTemplatePushStatus: *string,
	UserNameTemplateSuffix: *string,
	UserNameTemplateType: *string,
	Users: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.label">Label</a></code> | <code>*string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>*string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>*string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>interface{}</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints">AcsEndpoints</a></code> | <code>*[]*string</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote">AdminNote</a></code> | <code>*string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson">AppLinksJson</a></code> | <code>*string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson">AppSettingsJson</a></code> | <code>*string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned">AssertionSigned</a></code> | <code>interface{}</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements">AttributeStatements</a></code> | <code>interface{}</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience">Audience</a></code> | <code>*string</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>*string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>*string</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>interface{}</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState">DefaultRelayState</a></code> | <code>*string</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination">Destination</a></code> | <code>*string</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>*string</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups">Groups</a></code> | <code>*[]*string</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos">HideIos</a></code> | <code>interface{}</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb">HideWeb</a></code> | <code>interface{}</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>interface{}</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#id SamlApp#id}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer">IdpIssuer</a></code> | <code>*string</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment">ImplicitAssignment</a></code> | <code>interface{}</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId">InlineHookId</a></code> | <code>*string</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid">KeyYearsValid</a></code> | <code>*f64</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo">Logo</a></code> | <code>*string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp">PreconfiguredApp</a></code> | <code>*string</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient">Recipient</a></code> | <code>*string</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed">RequestCompressed</a></code> | <code>interface{}</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned">ResponseSigned</a></code> | <code>interface{}</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>interface{}</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion">SamlVersion</a></code> | <code>*string</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>*string</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>*string</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>*string</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers">SkipUsers</a></code> | <code>interface{}</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer">SpIssuer</a></code> | <code>*string</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl">SsoUrl</a></code> | <code>*string</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.status">Status</a></code> | <code>*string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>*string</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>*string</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate">UserNameTemplate</a></code> | <code>*string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>*string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>*string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>*string</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppConfig.property.users">Users</a></code> | <code>interface{}</code> | users block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#label SamlApp#label}

---

##### `AccessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityErrorRedirectUrl"></a>

```go
AccessibilityErrorRedirectUrl *string
```

- *Type:* *string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}

---

##### `AccessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilityLoginRedirectUrl"></a>

```go
AccessibilityLoginRedirectUrl *string
```

- *Type:* *string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}

---

##### `AccessibilitySelfService`<sup>Optional</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.accessibilitySelfService"></a>

```go
AccessibilitySelfService interface{}
```

- *Type:* interface{}

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#accessibility_self_service SamlApp#accessibility_self_service}

---

##### `AcsEndpoints`<sup>Optional</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.acsEndpoints"></a>

```go
AcsEndpoints *[]*string
```

- *Type:* *[]*string

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#acs_endpoints SamlApp#acs_endpoints}

---

##### `AdminNote`<sup>Optional</sup> <a name="AdminNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.adminNote"></a>

```go
AdminNote *string
```

- *Type:* *string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#admin_note SamlApp#admin_note}

---

##### `AppLinksJson`<sup>Optional</sup> <a name="AppLinksJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appLinksJson"></a>

```go
AppLinksJson *string
```

- *Type:* *string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#app_links_json SamlApp#app_links_json}

---

##### `AppSettingsJson`<sup>Optional</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.appSettingsJson"></a>

```go
AppSettingsJson *string
```

- *Type:* *string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#app_settings_json SamlApp#app_settings_json}

---

##### `AssertionSigned`<sup>Optional</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.assertionSigned"></a>

```go
AssertionSigned interface{}
```

- *Type:* interface{}

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#assertion_signed SamlApp#assertion_signed}

---

##### `AttributeStatements`<sup>Optional</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.attributeStatements"></a>

```go
AttributeStatements interface{}
```

- *Type:* interface{}

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#attribute_statements SamlApp#attribute_statements}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#audience SamlApp#audience}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authenticationPolicy"></a>

```go
AuthenticationPolicy *string
```

- *Type:* *string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#authentication_policy SamlApp#authentication_policy}

---

##### `AuthnContextClassRef`<sup>Optional</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.authnContextClassRef"></a>

```go
AuthnContextClassRef *string
```

- *Type:* *string

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}

---

##### `AutoSubmitToolbar`<sup>Optional</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.autoSubmitToolbar"></a>

```go
AutoSubmitToolbar interface{}
```

- *Type:* interface{}

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}

---

##### `DefaultRelayState`<sup>Optional</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.defaultRelayState"></a>

```go
DefaultRelayState *string
```

- *Type:* *string

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#default_relay_state SamlApp#default_relay_state}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#destination SamlApp#destination}

---

##### `DigestAlgorithm`<sup>Optional</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.digestAlgorithm"></a>

```go
DigestAlgorithm *string
```

- *Type:* *string

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#digest_algorithm SamlApp#digest_algorithm}

---

##### `EnduserNote`<sup>Optional</sup> <a name="EnduserNote" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.enduserNote"></a>

```go
EnduserNote *string
```

- *Type:* *string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#enduser_note SamlApp#enduser_note}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.groups"></a>

```go
Groups *[]*string
```

- *Type:* *[]*string

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#groups SamlApp#groups}

---

##### `HideIos`<sup>Optional</sup> <a name="HideIos" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideIos"></a>

```go
HideIos interface{}
```

- *Type:* interface{}

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#hide_ios SamlApp#hide_ios}

---

##### `HideWeb`<sup>Optional</sup> <a name="HideWeb" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.hideWeb"></a>

```go
HideWeb interface{}
```

- *Type:* interface{}

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#hide_web SamlApp#hide_web}

---

##### `HonorForceAuthn`<sup>Optional</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.honorForceAuthn"></a>

```go
HonorForceAuthn interface{}
```

- *Type:* interface{}

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#honor_force_authn SamlApp#honor_force_authn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#id SamlApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpIssuer`<sup>Optional</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.idpIssuer"></a>

```go
IdpIssuer *string
```

- *Type:* *string

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#idp_issuer SamlApp#idp_issuer}

---

##### `ImplicitAssignment`<sup>Optional</sup> <a name="ImplicitAssignment" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.implicitAssignment"></a>

```go
ImplicitAssignment interface{}
```

- *Type:* interface{}

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#implicit_assignment SamlApp#implicit_assignment}

---

##### `InlineHookId`<sup>Optional</sup> <a name="InlineHookId" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.inlineHookId"></a>

```go
InlineHookId *string
```

- *Type:* *string

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#inline_hook_id SamlApp#inline_hook_id}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#key_name SamlApp#key_name}

---

##### `KeyYearsValid`<sup>Optional</sup> <a name="KeyYearsValid" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.keyYearsValid"></a>

```go
KeyYearsValid *f64
```

- *Type:* *f64

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#key_years_valid SamlApp#key_years_valid}

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.logo"></a>

```go
Logo *string
```

- *Type:* *string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#logo SamlApp#logo}

---

##### `PreconfiguredApp`<sup>Optional</sup> <a name="PreconfiguredApp" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.preconfiguredApp"></a>

```go
PreconfiguredApp *string
```

- *Type:* *string

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#preconfigured_app SamlApp#preconfigured_app}

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.recipient"></a>

```go
Recipient *string
```

- *Type:* *string

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#recipient SamlApp#recipient}

---

##### `RequestCompressed`<sup>Optional</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.requestCompressed"></a>

```go
RequestCompressed interface{}
```

- *Type:* interface{}

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#request_compressed SamlApp#request_compressed}

---

##### `ResponseSigned`<sup>Optional</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.responseSigned"></a>

```go
ResponseSigned interface{}
```

- *Type:* interface{}

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#response_signed SamlApp#response_signed}

---

##### `SamlSignedRequestEnabled`<sup>Optional</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlSignedRequestEnabled"></a>

```go
SamlSignedRequestEnabled interface{}
```

- *Type:* interface{}

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#saml_signed_request_enabled SamlApp#saml_signed_request_enabled}

---

##### `SamlVersion`<sup>Optional</sup> <a name="SamlVersion" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.samlVersion"></a>

```go
SamlVersion *string
```

- *Type:* *string

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#saml_version SamlApp#saml_version}

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#signature_algorithm SamlApp#signature_algorithm}

---

##### `SingleLogoutCertificate`<sup>Optional</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutCertificate"></a>

```go
SingleLogoutCertificate *string
```

- *Type:* *string

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#single_logout_certificate SamlApp#single_logout_certificate}

---

##### `SingleLogoutIssuer`<sup>Optional</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutIssuer"></a>

```go
SingleLogoutIssuer *string
```

- *Type:* *string

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#single_logout_issuer SamlApp#single_logout_issuer}

---

##### `SingleLogoutUrl`<sup>Optional</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.singleLogoutUrl"></a>

```go
SingleLogoutUrl *string
```

- *Type:* *string

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#single_logout_url SamlApp#single_logout_url}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipGroups"></a>

```go
SkipGroups interface{}
```

- *Type:* interface{}

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#skip_groups SamlApp#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.skipUsers"></a>

```go
SkipUsers interface{}
```

- *Type:* interface{}

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#skip_users SamlApp#skip_users}

---

##### `SpIssuer`<sup>Optional</sup> <a name="SpIssuer" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.spIssuer"></a>

```go
SpIssuer *string
```

- *Type:* *string

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#sp_issuer SamlApp#sp_issuer}

---

##### `SsoUrl`<sup>Optional</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.ssoUrl"></a>

```go
SsoUrl *string
```

- *Type:* *string

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#sso_url SamlApp#sso_url}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#status SamlApp#status}

---

##### `SubjectNameIdFormat`<sup>Optional</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdFormat"></a>

```go
SubjectNameIdFormat *string
```

- *Type:* *string

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#subject_name_id_format SamlApp#subject_name_id_format}

---

##### `SubjectNameIdTemplate`<sup>Optional</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.subjectNameIdTemplate"></a>

```go
SubjectNameIdTemplate *string
```

- *Type:* *string

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#subject_name_id_template SamlApp#subject_name_id_template}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.timeouts"></a>

```go
Timeouts SamlAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts">SamlAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#timeouts SamlApp#timeouts}

---

##### `UserNameTemplate`<sup>Optional</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplate"></a>

```go
UserNameTemplate *string
```

- *Type:* *string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template SamlApp#user_name_template}

---

##### `UserNameTemplatePushStatus`<sup>Optional</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplatePushStatus"></a>

```go
UserNameTemplatePushStatus *string
```

- *Type:* *string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}

---

##### `UserNameTemplateSuffix`<sup>Optional</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateSuffix"></a>

```go
UserNameTemplateSuffix *string
```

- *Type:* *string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}

---

##### `UserNameTemplateType`<sup>Optional</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.userNameTemplateType"></a>

```go
UserNameTemplateType *string
```

- *Type:* *string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#user_name_template_type SamlApp#user_name_template_type}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-okta.samlApp.SamlAppConfig.property.users"></a>

```go
Users interface{}
```

- *Type:* interface{}

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#users SamlApp#users}

---

### SamlAppKeys <a name="SamlAppKeys" id="@cdktf/provider-okta.samlApp.SamlAppKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

&samlapp.SamlAppKeys {

}
```


### SamlAppTimeouts <a name="SamlAppTimeouts" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

&samlapp.SamlAppTimeouts {
	Create: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#create SamlApp#create}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#read SamlApp#read}. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#update SamlApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#create SamlApp#create}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#read SamlApp#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-okta.samlApp.SamlAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#update SamlApp#update}.

---

### SamlAppUsers <a name="SamlAppUsers" id="@cdktf/provider-okta.samlApp.SamlAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlApp.SamlAppUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

&samlapp.SamlAppUsers {
	Id: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.id">Id</a></code> | <code>*string</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.password">Password</a></code> | <code>*string</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsers.property.username">Username</a></code> | <code>*string</code> | Username for user. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.id"></a>

```go
Id *string
```

- *Type:* *string

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#id SamlApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#password SamlApp#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-okta.samlApp.SamlAppUsers.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_app#username SamlApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SamlAppAttributeStatementsList <a name="SamlAppAttributeStatementsList" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlAppAttributeStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SamlAppAttributeStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get"></a>

```go
func Get(index *f64) SamlAppAttributeStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SamlAppAttributeStatementsOutputReference <a name="SamlAppAttributeStatementsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlAppAttributeStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SamlAppAttributeStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue">ResetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```

##### `ResetFilterValue` <a name="ResetFilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetFilterValue"></a>

```go
func ResetFilterValue()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput">FilterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue">FilterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `FilterValueInput`<sup>Optional</sup> <a name="FilterValueInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValueInput"></a>

```go
func FilterValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `FilterValue`<sup>Required</sup> <a name="FilterValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.filterValue"></a>

```go
func FilterValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppAttributeStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SamlAppKeysList <a name="SamlAppKeysList" id="@cdktf/provider-okta.samlApp.SamlAppKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlAppKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SamlAppKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get"></a>

```go
func Get(index *f64) SamlAppKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SamlAppKeysOutputReference <a name="SamlAppKeysOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlAppKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SamlAppKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e">E</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid">Kid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty">Kty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n">N</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use">Use</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C">X5C</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256">X5TS256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.e"></a>

```go
func E() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kid"></a>

```go
func Kid() *string
```

- *Type:* *string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.kty"></a>

```go
func Kty() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.n"></a>

```go
func N() *string
```

- *Type:* *string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.use"></a>

```go
func Use() *string
```

- *Type:* *string

---

##### `X5C`<sup>Required</sup> <a name="X5C" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5C"></a>

```go
func X5C() *[]*string
```

- *Type:* *[]*string

---

##### `X5TS256`<sup>Required</sup> <a name="X5TS256" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.x5TS256"></a>

```go
func X5TS256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() SamlAppKeys
```

- *Type:* <a href="#@cdktf/provider-okta.samlApp.SamlAppKeys">SamlAppKeys</a>

---


### SamlAppTimeoutsOutputReference <a name="SamlAppTimeoutsOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SamlAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SamlAppUsersList <a name="SamlAppUsersList" id="@cdktf/provider-okta.samlApp.SamlAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlAppUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SamlAppUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get"></a>

```go
func Get(index *f64) SamlAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SamlAppUsersOutputReference <a name="SamlAppUsersOutputReference" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v7/samlapp"

samlapp.NewSamlAppUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SamlAppUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.samlApp.SamlAppUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



