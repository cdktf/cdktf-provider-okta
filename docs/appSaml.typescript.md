# `appSaml` Submodule <a name="`appSaml` Submodule" id="@cdktf/provider-okta.appSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSaml <a name="AppSaml" id="@cdktf/provider-okta.appSaml.AppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

new appSaml.AppSaml(scope: Construct, id: string, config: AppSamlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig">AppSamlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSaml.AppSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlConfig">AppSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements">putAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints">resetAcsEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned">resetAssertionSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements">resetAttributeStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef">resetAuthnContextClassRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState">resetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm">resetDigestAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn">resetHonorForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer">resetIdpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId">resetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid">resetKeyYearsValid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed">resetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned">resetResponseSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled">resetSamlSignedRequestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion">resetSamlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate">resetSingleLogoutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer">resetSingleLogoutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl">resetSingleLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer">resetSpIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl">resetSsoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat">resetSubjectNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate">resetSubjectNameIdTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSaml.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSaml.AppSaml.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSaml.AppSaml.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSaml.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAttributeStatements` <a name="putAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements"></a>

```typescript
public putAttributeStatements(value: IResolvable | AppSamlAttributeStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putAttributeStatements.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts"></a>

```typescript
public putTimeouts(value: AppSamlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSaml.AppSaml.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityErrorRedirectUrl"></a>

```typescript
public resetAccessibilityErrorRedirectUrl(): void
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilityLoginRedirectUrl"></a>

```typescript
public resetAccessibilityLoginRedirectUrl(): void
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.resetAccessibilitySelfService"></a>

```typescript
public resetAccessibilitySelfService(): void
```

##### `resetAcsEndpoints` <a name="resetAcsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.resetAcsEndpoints"></a>

```typescript
public resetAcsEndpoints(): void
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetAdminNote"></a>

```typescript
public resetAdminNote(): void
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppLinksJson"></a>

```typescript
public resetAppLinksJson(): void
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.resetAppSettingsJson"></a>

```typescript
public resetAppSettingsJson(): void
```

##### `resetAssertionSigned` <a name="resetAssertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetAssertionSigned"></a>

```typescript
public resetAssertionSigned(): void
```

##### `resetAttributeStatements` <a name="resetAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.resetAttributeStatements"></a>

```typescript
public resetAttributeStatements(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-okta.appSaml.AppSaml.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthenticationPolicy"></a>

```typescript
public resetAuthenticationPolicy(): void
```

##### `resetAuthnContextClassRef` <a name="resetAuthnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.resetAuthnContextClassRef"></a>

```typescript
public resetAuthnContextClassRef(): void
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.resetAutoSubmitToolbar"></a>

```typescript
public resetAutoSubmitToolbar(): void
```

##### `resetDefaultRelayState` <a name="resetDefaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.resetDefaultRelayState"></a>

```typescript
public resetDefaultRelayState(): void
```

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-okta.appSaml.AppSaml.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetDigestAlgorithm` <a name="resetDigestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetDigestAlgorithm"></a>

```typescript
public resetDigestAlgorithm(): void
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.resetEnduserNote"></a>

```typescript
public resetEnduserNote(): void
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideIos"></a>

```typescript
public resetHideIos(): void
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.resetHideWeb"></a>

```typescript
public resetHideWeb(): void
```

##### `resetHonorForceAuthn` <a name="resetHonorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.resetHonorForceAuthn"></a>

```typescript
public resetHonorForceAuthn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSaml.AppSaml.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpIssuer` <a name="resetIdpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetIdpIssuer"></a>

```typescript
public resetIdpIssuer(): void
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.resetImplicitAssignment"></a>

```typescript
public resetImplicitAssignment(): void
```

##### `resetInlineHookId` <a name="resetInlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.resetInlineHookId"></a>

```typescript
public resetInlineHookId(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetKeyYearsValid` <a name="resetKeyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.resetKeyYearsValid"></a>

```typescript
public resetKeyYearsValid(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appSaml.AppSaml.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.resetPreconfiguredApp"></a>

```typescript
public resetPreconfiguredApp(): void
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktf/provider-okta.appSaml.AppSaml.resetRecipient"></a>

```typescript
public resetRecipient(): void
```

##### `resetRequestCompressed` <a name="resetRequestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.resetRequestCompressed"></a>

```typescript
public resetRequestCompressed(): void
```

##### `resetResponseSigned` <a name="resetResponseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.resetResponseSigned"></a>

```typescript
public resetResponseSigned(): void
```

##### `resetSamlSignedRequestEnabled` <a name="resetSamlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlSignedRequestEnabled"></a>

```typescript
public resetSamlSignedRequestEnabled(): void
```

##### `resetSamlVersion` <a name="resetSamlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.resetSamlVersion"></a>

```typescript
public resetSamlVersion(): void
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.resetSignatureAlgorithm"></a>

```typescript
public resetSignatureAlgorithm(): void
```

##### `resetSingleLogoutCertificate` <a name="resetSingleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutCertificate"></a>

```typescript
public resetSingleLogoutCertificate(): void
```

##### `resetSingleLogoutIssuer` <a name="resetSingleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutIssuer"></a>

```typescript
public resetSingleLogoutIssuer(): void
```

##### `resetSingleLogoutUrl` <a name="resetSingleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSingleLogoutUrl"></a>

```typescript
public resetSingleLogoutUrl(): void
```

##### `resetSpIssuer` <a name="resetSpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.resetSpIssuer"></a>

```typescript
public resetSpIssuer(): void
```

##### `resetSsoUrl` <a name="resetSsoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.resetSsoUrl"></a>

```typescript
public resetSsoUrl(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubjectNameIdFormat` <a name="resetSubjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdFormat"></a>

```typescript
public resetSubjectNameIdFormat(): void
```

##### `resetSubjectNameIdTemplate` <a name="resetSubjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetSubjectNameIdTemplate"></a>

```typescript
public resetSubjectNameIdTemplate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appSaml.AppSaml.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplate"></a>

```typescript
public resetUserNameTemplate(): void
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplatePushStatus"></a>

```typescript
public resetUserNameTemplatePushStatus(): void
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateSuffix"></a>

```typescript
public resetUserNameTemplateSuffix(): void
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.resetUserNameTemplateType"></a>

```typescript
public resetUserNameTemplateType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

appSaml.AppSaml.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

appSaml.AppSaml.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

appSaml.AppSaml.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSaml.AppSaml.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

appSaml.AppSaml.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppSaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements">attributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl">embedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityKey">entityKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl">entityUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.features">features</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding">httpPostBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding">httpRedirectBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl">metadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode">signOnMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput">acsEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput">adminNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput">assertionSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput">attributeStatementsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput">authnContextClassRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput">defaultRelayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput">digestAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput">enduserNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput">hideIosInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput">hideWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput">honorForceAuthnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput">idpIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput">inlineHookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput">keyYearsValidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput">recipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput">requestCompressedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput">responseSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput">samlSignedRequestEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput">samlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput">singleLogoutCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput">singleLogoutIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput">singleLogoutUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput">spIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput">ssoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput">subjectNameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput">subjectNameIdTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints">acsEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.adminNote">adminNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned">assertionSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef">authnContextClassRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm">digestAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote">enduserNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn">honorForceAuthn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer">idpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId">inlineHookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid">keyYearsValid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.recipient">recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed">requestCompressed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned">responseSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion">samlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer">spIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSaml.AppSaml.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSaml.AppSaml.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSaml.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSaml.AppSaml.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSaml.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSaml.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSaml.AppSaml.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSaml.AppSaml.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSaml.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSaml.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSaml.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributeStatements`<sup>Required</sup> <a name="attributeStatements" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatements"></a>

```typescript
public readonly attributeStatements: AppSamlAttributeStatementsList;
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList">AppSamlAttributeStatementsList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `embedUrl`<sup>Required</sup> <a name="embedUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.embedUrl"></a>

```typescript
public readonly embedUrl: string;
```

- *Type:* string

---

##### `entityKey`<sup>Required</sup> <a name="entityKey" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityKey"></a>

```typescript
public readonly entityKey: string;
```

- *Type:* string

---

##### `entityUrl`<sup>Required</sup> <a name="entityUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.entityUrl"></a>

```typescript
public readonly entityUrl: string;
```

- *Type:* string

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.appSaml.AppSaml.property.features"></a>

```typescript
public readonly features: string[];
```

- *Type:* string[]

---

##### `httpPostBinding`<sup>Required</sup> <a name="httpPostBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpPostBinding"></a>

```typescript
public readonly httpPostBinding: string;
```

- *Type:* string

---

##### `httpRedirectBinding`<sup>Required</sup> <a name="httpRedirectBinding" id="@cdktf/provider-okta.appSaml.AppSaml.property.httpRedirectBinding"></a>

```typescript
public readonly httpRedirectBinding: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-okta.appSaml.AppSaml.property.keys"></a>

```typescript
public readonly keys: AppSamlKeysList;
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList">AppSamlKeysList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.metadataUrl"></a>

```typescript
public readonly metadataUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSaml.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appSaml.AppSaml.property.signOnMode"></a>

```typescript
public readonly signOnMode: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeouts"></a>

```typescript
public readonly timeouts: AppSamlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference">AppSamlTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrlInput"></a>

```typescript
public readonly accessibilityErrorRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrlInput"></a>

```typescript
public readonly accessibilityLoginRedirectUrlInput: string;
```

- *Type:* string

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfServiceInput"></a>

```typescript
public readonly accessibilitySelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acsEndpointsInput`<sup>Optional</sup> <a name="acsEndpointsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpointsInput"></a>

```typescript
public readonly acsEndpointsInput: string[];
```

- *Type:* string[]

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNoteInput"></a>

```typescript
public readonly adminNoteInput: string;
```

- *Type:* string

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJsonInput"></a>

```typescript
public readonly appLinksJsonInput: string;
```

- *Type:* string

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJsonInput"></a>

```typescript
public readonly appSettingsJsonInput: string;
```

- *Type:* string

---

##### `assertionSignedInput`<sup>Optional</sup> <a name="assertionSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSignedInput"></a>

```typescript
public readonly assertionSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attributeStatementsInput`<sup>Optional</sup> <a name="attributeStatementsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.attributeStatementsInput"></a>

```typescript
public readonly attributeStatementsInput: IResolvable | AppSamlAttributeStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>[]

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicyInput"></a>

```typescript
public readonly authenticationPolicyInput: string;
```

- *Type:* string

---

##### `authnContextClassRefInput`<sup>Optional</sup> <a name="authnContextClassRefInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRefInput"></a>

```typescript
public readonly authnContextClassRefInput: string;
```

- *Type:* string

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbarInput"></a>

```typescript
public readonly autoSubmitToolbarInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultRelayStateInput`<sup>Optional</sup> <a name="defaultRelayStateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayStateInput"></a>

```typescript
public readonly defaultRelayStateInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `digestAlgorithmInput`<sup>Optional</sup> <a name="digestAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithmInput"></a>

```typescript
public readonly digestAlgorithmInput: string;
```

- *Type:* string

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNoteInput"></a>

```typescript
public readonly enduserNoteInput: string;
```

- *Type:* string

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIosInput"></a>

```typescript
public readonly hideIosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWebInput"></a>

```typescript
public readonly hideWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `honorForceAuthnInput`<sup>Optional</sup> <a name="honorForceAuthnInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthnInput"></a>

```typescript
public readonly honorForceAuthnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpIssuerInput`<sup>Optional</sup> <a name="idpIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuerInput"></a>

```typescript
public readonly idpIssuerInput: string;
```

- *Type:* string

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignmentInput"></a>

```typescript
public readonly implicitAssignmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inlineHookIdInput`<sup>Optional</sup> <a name="inlineHookIdInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookIdInput"></a>

```typescript
public readonly inlineHookIdInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyYearsValidInput`<sup>Optional</sup> <a name="keyYearsValidInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValidInput"></a>

```typescript
public readonly keyYearsValidInput: number;
```

- *Type:* number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredAppInput"></a>

```typescript
public readonly preconfiguredAppInput: string;
```

- *Type:* string

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipientInput"></a>

```typescript
public readonly recipientInput: string;
```

- *Type:* string

---

##### `requestCompressedInput`<sup>Optional</sup> <a name="requestCompressedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressedInput"></a>

```typescript
public readonly requestCompressedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `responseSignedInput`<sup>Optional</sup> <a name="responseSignedInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSignedInput"></a>

```typescript
public readonly responseSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlSignedRequestEnabledInput`<sup>Optional</sup> <a name="samlSignedRequestEnabledInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabledInput"></a>

```typescript
public readonly samlSignedRequestEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlVersionInput`<sup>Optional</sup> <a name="samlVersionInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersionInput"></a>

```typescript
public readonly samlVersionInput: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `singleLogoutCertificateInput`<sup>Optional</sup> <a name="singleLogoutCertificateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificateInput"></a>

```typescript
public readonly singleLogoutCertificateInput: string;
```

- *Type:* string

---

##### `singleLogoutIssuerInput`<sup>Optional</sup> <a name="singleLogoutIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuerInput"></a>

```typescript
public readonly singleLogoutIssuerInput: string;
```

- *Type:* string

---

##### `singleLogoutUrlInput`<sup>Optional</sup> <a name="singleLogoutUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrlInput"></a>

```typescript
public readonly singleLogoutUrlInput: string;
```

- *Type:* string

---

##### `spIssuerInput`<sup>Optional</sup> <a name="spIssuerInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuerInput"></a>

```typescript
public readonly spIssuerInput: string;
```

- *Type:* string

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrlInput"></a>

```typescript
public readonly ssoUrlInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subjectNameIdFormatInput`<sup>Optional</sup> <a name="subjectNameIdFormatInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormatInput"></a>

```typescript
public readonly subjectNameIdFormatInput: string;
```

- *Type:* string

---

##### `subjectNameIdTemplateInput`<sup>Optional</sup> <a name="subjectNameIdTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplateInput"></a>

```typescript
public readonly subjectNameIdTemplateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppSamlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateInput"></a>

```typescript
public readonly userNameTemplateInput: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatusInput"></a>

```typescript
public readonly userNameTemplatePushStatusInput: string;
```

- *Type:* string

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffixInput"></a>

```typescript
public readonly userNameTemplateSuffixInput: string;
```

- *Type:* string

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateTypeInput"></a>

```typescript
public readonly userNameTemplateTypeInput: string;
```

- *Type:* string

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSaml.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acsEndpoints`<sup>Required</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.appSaml.AppSaml.property.acsEndpoints"></a>

```typescript
public readonly acsEndpoints: string[];
```

- *Type:* string[]

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appSaml.AppSaml.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

---

##### `assertionSigned`<sup>Required</sup> <a name="assertionSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.assertionSigned"></a>

```typescript
public readonly assertionSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSaml.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSaml.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

---

##### `authnContextClassRef`<sup>Required</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSaml.property.authnContextClassRef"></a>

```typescript
public readonly authnContextClassRef: string;
```

- *Type:* string

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSaml.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.appSaml.AppSaml.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSaml.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `digestAlgorithm`<sup>Required</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.digestAlgorithm"></a>

```typescript
public readonly digestAlgorithm: string;
```

- *Type:* string

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSaml.AppSaml.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSaml.AppSaml.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `honorForceAuthn`<sup>Required</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSaml.property.honorForceAuthn"></a>

```typescript
public readonly honorForceAuthn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSaml.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpIssuer`<sup>Required</sup> <a name="idpIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.idpIssuer"></a>

```typescript
public readonly idpIssuer: string;
```

- *Type:* string

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appSaml.AppSaml.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.appSaml.AppSaml.property.inlineHookId"></a>

```typescript
public readonly inlineHookId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyYearsValid`<sup>Required</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.appSaml.AppSaml.property.keyYearsValid"></a>

```typescript
public readonly keyYearsValid: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSaml.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSaml.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSaml.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSaml.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

---

##### `requestCompressed`<sup>Required</sup> <a name="requestCompressed" id="@cdktf/provider-okta.appSaml.AppSaml.property.requestCompressed"></a>

```typescript
public readonly requestCompressed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `responseSigned`<sup>Required</sup> <a name="responseSigned" id="@cdktf/provider-okta.appSaml.AppSaml.property.responseSigned"></a>

```typescript
public readonly responseSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlSignedRequestEnabled`<sup>Required</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlSignedRequestEnabled"></a>

```typescript
public readonly samlSignedRequestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `samlVersion`<sup>Required</sup> <a name="samlVersion" id="@cdktf/provider-okta.appSaml.AppSaml.property.samlVersion"></a>

```typescript
public readonly samlVersion: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSaml.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `singleLogoutCertificate`<sup>Required</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutCertificate"></a>

```typescript
public readonly singleLogoutCertificate: string;
```

- *Type:* string

---

##### `singleLogoutIssuer`<sup>Required</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutIssuer"></a>

```typescript
public readonly singleLogoutIssuer: string;
```

- *Type:* string

---

##### `singleLogoutUrl`<sup>Required</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.singleLogoutUrl"></a>

```typescript
public readonly singleLogoutUrl: string;
```

- *Type:* string

---

##### `spIssuer`<sup>Required</sup> <a name="spIssuer" id="@cdktf/provider-okta.appSaml.AppSaml.property.spIssuer"></a>

```typescript
public readonly spIssuer: string;
```

- *Type:* string

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.appSaml.AppSaml.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSaml.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subjectNameIdFormat`<sup>Required</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdFormat"></a>

```typescript
public readonly subjectNameIdFormat: string;
```

- *Type:* string

---

##### `subjectNameIdTemplate`<sup>Required</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.subjectNameIdTemplate"></a>

```typescript
public readonly subjectNameIdTemplate: string;
```

- *Type:* string

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSaml.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSaml.AppSaml.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSamlAttributeStatements <a name="AppSamlAttributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

const appSamlAttributeStatements: appSaml.AppSamlAttributeStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name">name</a></code> | <code>string</code> | The reference name of the attribute statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType">filterType</a></code> | <code>string</code> | Type of group attribute filter. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue">filterValue</a></code> | <code>string</code> | Filter value to use. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace">namespace</a></code> | <code>string</code> | The name format of the attribute. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type">type</a></code> | <code>string</code> | The type of attribute statements object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#values AppSaml#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The reference name of the attribute statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#name AppSaml#name}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Type of group attribute filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#filter_type AppSaml#filter_type}

---

##### `filterValue`<sup>Optional</sup> <a name="filterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.filterValue"></a>

```typescript
public readonly filterValue: string;
```

- *Type:* string

Filter value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#filter_value AppSaml#filter_value}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The name format of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#namespace AppSaml#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of attribute statements object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#type AppSaml#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatements.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#values AppSaml#values}.

---

### AppSamlConfig <a name="AppSamlConfig" id="@cdktf/provider-okta.appSaml.AppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

const appSamlConfig: appSaml.AppSamlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.label">label</a></code> | <code>string</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>string</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>string</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints">acsEndpoints</a></code> | <code>string[]</code> | List of ACS endpoints for this SAML application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote">adminNote</a></code> | <code>string</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson">appLinksJson</a></code> | <code>string</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>string</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned">assertionSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the SAML assertion is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements">attributeStatements</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>[]</code> | attribute_statements block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience">audience</a></code> | <code>string</code> | Audience Restriction. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>string</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef">authnContextClassRef</a></code> | <code>string</code> | Identifies the SAML authentication context class for the assertion’s authentication statement. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>boolean \| cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState">defaultRelayState</a></code> | <code>string</code> | Identifies a specific application resource in an IDP initiated SSO scenario. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination">destination</a></code> | <code>string</code> | Identifies the location where the SAML response is intended to be sent inside of the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm">digestAlgorithm</a></code> | <code>string</code> | Determines the digest algorithm used to digitally sign the SAML assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote">enduserNote</a></code> | <code>string</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos">hideIos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb">hideWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn">honorForceAuthn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prompt user to re-authenticate if SP asks for it. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#id AppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer">idpIssuer</a></code> | <code>string</code> | SAML issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId">inlineHookId</a></code> | <code>string</code> | Saml Inline Hook setting. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName">keyName</a></code> | <code>string</code> | Certificate name. This modulates the rotation of keys. New name == new key. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid">keyYearsValid</a></code> | <code>number</code> | Number of years the certificate is valid. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo">logo</a></code> | <code>string</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>string</code> | Name of preexisting SAML application. For instance 'slack'. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient">recipient</a></code> | <code>string</code> | The location where the app may present the SAML assertion. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed">requestCompressed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned">responseSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the SAML auth response message is digitally signed. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | SAML Signed Request enabled. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion">samlVersion</a></code> | <code>string</code> | SAML version for the app's sign-on mode. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | Signature algorithm used ot digitally sign the assertion and response. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>string</code> | x509 encoded certificate that the Service Provider uses to sign Single Logout requests. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>string</code> | The issuer of the Service Provider that generates the Single Logout request. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>string</code> | The location where the logout response is sent. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer">spIssuer</a></code> | <code>string</code> | SAML SP issuer ID. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | Single Sign On URL. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.status">status</a></code> | <code>string</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>string</code> | Identifies the SAML processing rules. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>string</code> | Template for app user's username when a user is assigned to the app. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>string</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>string</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>string</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>string</code> | Username template type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#label AppSaml#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityErrorRedirectUrl"></a>

```typescript
public readonly accessibilityErrorRedirectUrl: string;
```

- *Type:* string

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#accessibility_error_redirect_url AppSaml#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilityLoginRedirectUrl"></a>

```typescript
public readonly accessibilityLoginRedirectUrl: string;
```

- *Type:* string

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#accessibility_login_redirect_url AppSaml#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.accessibilitySelfService"></a>

```typescript
public readonly accessibilitySelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#accessibility_self_service AppSaml#accessibility_self_service}

---

##### `acsEndpoints`<sup>Optional</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.acsEndpoints"></a>

```typescript
public readonly acsEndpoints: string[];
```

- *Type:* string[]

List of ACS endpoints for this SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#acs_endpoints AppSaml#acs_endpoints}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.adminNote"></a>

```typescript
public readonly adminNote: string;
```

- *Type:* string

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#admin_note AppSaml#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appLinksJson"></a>

```typescript
public readonly appLinksJson: string;
```

- *Type:* string

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#app_links_json AppSaml#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.appSettingsJson"></a>

```typescript
public readonly appSettingsJson: string;
```

- *Type:* string

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#app_settings_json AppSaml#app_settings_json}

---

##### `assertionSigned`<sup>Optional</sup> <a name="assertionSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.assertionSigned"></a>

```typescript
public readonly assertionSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the SAML assertion is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#assertion_signed AppSaml#assertion_signed}

---

##### `attributeStatements`<sup>Optional</sup> <a name="attributeStatements" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.attributeStatements"></a>

```typescript
public readonly attributeStatements: IResolvable | AppSamlAttributeStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>[]

attribute_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#attribute_statements AppSaml#attribute_statements}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience Restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#audience AppSaml#audience}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authenticationPolicy"></a>

```typescript
public readonly authenticationPolicy: string;
```

- *Type:* string

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#authentication_policy AppSaml#authentication_policy}

---

##### `authnContextClassRef`<sup>Optional</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.authnContextClassRef"></a>

```typescript
public readonly authnContextClassRef: string;
```

- *Type:* string

Identifies the SAML authentication context class for the assertion’s authentication statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#authn_context_class_ref AppSaml#authn_context_class_ref}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#auto_submit_toolbar AppSaml#auto_submit_toolbar}

---

##### `defaultRelayState`<sup>Optional</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.defaultRelayState"></a>

```typescript
public readonly defaultRelayState: string;
```

- *Type:* string

Identifies a specific application resource in an IDP initiated SSO scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#default_relay_state AppSaml#default_relay_state}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Identifies the location where the SAML response is intended to be sent inside of the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#destination AppSaml#destination}

---

##### `digestAlgorithm`<sup>Optional</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.digestAlgorithm"></a>

```typescript
public readonly digestAlgorithm: string;
```

- *Type:* string

Determines the digest algorithm used to digitally sign the SAML assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#digest_algorithm AppSaml#digest_algorithm}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.enduserNote"></a>

```typescript
public readonly enduserNote: string;
```

- *Type:* string

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#enduser_note AppSaml#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideIos"></a>

```typescript
public readonly hideIos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#hide_ios AppSaml#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.hideWeb"></a>

```typescript
public readonly hideWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#hide_web AppSaml#hide_web}

---

##### `honorForceAuthn`<sup>Optional</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.honorForceAuthn"></a>

```typescript
public readonly honorForceAuthn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prompt user to re-authenticate if SP asks for it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#honor_force_authn AppSaml#honor_force_authn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#id AppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpIssuer`<sup>Optional</sup> <a name="idpIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.idpIssuer"></a>

```typescript
public readonly idpIssuer: string;
```

- *Type:* string

SAML issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#idp_issuer AppSaml#idp_issuer}

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.implicitAssignment"></a>

```typescript
public readonly implicitAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#implicit_assignment AppSaml#implicit_assignment}

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.inlineHookId"></a>

```typescript
public readonly inlineHookId: string;
```

- *Type:* string

Saml Inline Hook setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#inline_hook_id AppSaml#inline_hook_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Certificate name. This modulates the rotation of keys. New name == new key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#key_name AppSaml#key_name}

---

##### `keyYearsValid`<sup>Optional</sup> <a name="keyYearsValid" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.keyYearsValid"></a>

```typescript
public readonly keyYearsValid: number;
```

- *Type:* number

Number of years the certificate is valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#key_years_valid AppSaml#key_years_valid}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#logo AppSaml#logo}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.preconfiguredApp"></a>

```typescript
public readonly preconfiguredApp: string;
```

- *Type:* string

Name of preexisting SAML application. For instance 'slack'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#preconfigured_app AppSaml#preconfigured_app}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

The location where the app may present the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#recipient AppSaml#recipient}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.requestCompressed"></a>

```typescript
public readonly requestCompressed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#request_compressed AppSaml#request_compressed}

---

##### `responseSigned`<sup>Optional</sup> <a name="responseSigned" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.responseSigned"></a>

```typescript
public readonly responseSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the SAML auth response message is digitally signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#response_signed AppSaml#response_signed}

---

##### `samlSignedRequestEnabled`<sup>Optional</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlSignedRequestEnabled"></a>

```typescript
public readonly samlSignedRequestEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

SAML Signed Request enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#saml_signed_request_enabled AppSaml#saml_signed_request_enabled}

---

##### `samlVersion`<sup>Optional</sup> <a name="samlVersion" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.samlVersion"></a>

```typescript
public readonly samlVersion: string;
```

- *Type:* string

SAML version for the app's sign-on mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#saml_version AppSaml#saml_version}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

Signature algorithm used ot digitally sign the assertion and response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#signature_algorithm AppSaml#signature_algorithm}

---

##### `singleLogoutCertificate`<sup>Optional</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutCertificate"></a>

```typescript
public readonly singleLogoutCertificate: string;
```

- *Type:* string

x509 encoded certificate that the Service Provider uses to sign Single Logout requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#single_logout_certificate AppSaml#single_logout_certificate}

---

##### `singleLogoutIssuer`<sup>Optional</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutIssuer"></a>

```typescript
public readonly singleLogoutIssuer: string;
```

- *Type:* string

The issuer of the Service Provider that generates the Single Logout request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#single_logout_issuer AppSaml#single_logout_issuer}

---

##### `singleLogoutUrl`<sup>Optional</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.singleLogoutUrl"></a>

```typescript
public readonly singleLogoutUrl: string;
```

- *Type:* string

The location where the logout response is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#single_logout_url AppSaml#single_logout_url}

---

##### `spIssuer`<sup>Optional</sup> <a name="spIssuer" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.spIssuer"></a>

```typescript
public readonly spIssuer: string;
```

- *Type:* string

SAML SP issuer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#sp_issuer AppSaml#sp_issuer}

---

##### `ssoUrl`<sup>Optional</sup> <a name="ssoUrl" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

Single Sign On URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#sso_url AppSaml#sso_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#status AppSaml#status}

---

##### `subjectNameIdFormat`<sup>Optional</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdFormat"></a>

```typescript
public readonly subjectNameIdFormat: string;
```

- *Type:* string

Identifies the SAML processing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#subject_name_id_format AppSaml#subject_name_id_format}

---

##### `subjectNameIdTemplate`<sup>Optional</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.subjectNameIdTemplate"></a>

```typescript
public readonly subjectNameIdTemplate: string;
```

- *Type:* string

Template for app user's username when a user is assigned to the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#subject_name_id_template AppSaml#subject_name_id_template}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppSamlTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#timeouts AppSaml#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplate"></a>

```typescript
public readonly userNameTemplate: string;
```

- *Type:* string

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#user_name_template AppSaml#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplatePushStatus"></a>

```typescript
public readonly userNameTemplatePushStatus: string;
```

- *Type:* string

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#user_name_template_push_status AppSaml#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateSuffix"></a>

```typescript
public readonly userNameTemplateSuffix: string;
```

- *Type:* string

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#user_name_template_suffix AppSaml#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSaml.AppSamlConfig.property.userNameTemplateType"></a>

```typescript
public readonly userNameTemplateType: string;
```

- *Type:* string

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#user_name_template_type AppSaml#user_name_template_type}

---

### AppSamlKeys <a name="AppSamlKeys" id="@cdktf/provider-okta.appSaml.AppSamlKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlKeys.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

const appSamlKeys: appSaml.AppSamlKeys = { ... }
```


### AppSamlTimeouts <a name="AppSamlTimeouts" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

const appSamlTimeouts: appSaml.AppSamlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#create AppSaml#create}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#read AppSaml#read}. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#update AppSaml#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#create AppSaml#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#read AppSaml#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSaml.AppSamlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/app_saml#update AppSaml#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSamlAttributeStatementsList <a name="AppSamlAttributeStatementsList" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

new appSaml.AppSamlAttributeStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get"></a>

```typescript
public get(index: number): AppSamlAttributeStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSamlAttributeStatements[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>[]

---


### AppSamlAttributeStatementsOutputReference <a name="AppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

new appSaml.AppSamlAttributeStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue">resetFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetFilterValue` <a name="resetFilterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetFilterValue"></a>

```typescript
public resetFilterValue(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput">filterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue">filterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `filterValueInput`<sup>Optional</sup> <a name="filterValueInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValueInput"></a>

```typescript
public readonly filterValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `filterValue`<sup>Required</sup> <a name="filterValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```typescript
public readonly filterValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSamlAttributeStatements;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSaml.AppSamlAttributeStatements">AppSamlAttributeStatements</a>

---


### AppSamlKeysList <a name="AppSamlKeysList" id="@cdktf/provider-okta.appSaml.AppSamlKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

new appSaml.AppSamlKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get"></a>

```typescript
public get(index: number): AppSamlKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AppSamlKeysOutputReference <a name="AppSamlKeysOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

new appSaml.AppSamlKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty">kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use">use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C">x5C</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256">x5TS256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.use"></a>

```typescript
public readonly use: string;
```

- *Type:* string

---

##### `x5C`<sup>Required</sup> <a name="x5C" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5C"></a>

```typescript
public readonly x5C: string[];
```

- *Type:* string[]

---

##### `x5TS256`<sup>Required</sup> <a name="x5TS256" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.x5TS256"></a>

```typescript
public readonly x5TS256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppSamlKeys;
```

- *Type:* <a href="#@cdktf/provider-okta.appSaml.AppSamlKeys">AppSamlKeys</a>

---


### AppSamlTimeoutsOutputReference <a name="AppSamlTimeoutsOutputReference" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer"></a>

```typescript
import { appSaml } from '@cdktf/provider-okta'

new appSaml.AppSamlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSaml.AppSamlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSamlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSaml.AppSamlTimeouts">AppSamlTimeouts</a>

---



