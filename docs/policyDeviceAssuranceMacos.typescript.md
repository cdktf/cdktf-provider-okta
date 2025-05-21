# `policyDeviceAssuranceMacos` Submodule <a name="`policyDeviceAssuranceMacos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceMacos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceMacos <a name="PolicyDeviceAssuranceMacos" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos okta_policy_device_assurance_macos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer"></a>

```typescript
import { policyDeviceAssuranceMacos } from '@cdktf/provider-okta'

new policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos(scope: Construct, id: string, config: PolicyDeviceAssuranceMacosConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig">PolicyDeviceAssuranceMacosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig">PolicyDeviceAssuranceMacosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType">resetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion">resetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType">resetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent">resetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders">resetThirdPartySignalProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion">resetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled">resetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked">resetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain">resetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted">resetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel">resetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall">resetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion">resetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger">resetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode">resetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel">resetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured">resetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled">resetTpspSiteIsolationEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDiskEncryptionType` <a name="resetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetDiskEncryptionType"></a>

```typescript
public resetDiskEncryptionType(): void
```

##### `resetOsVersion` <a name="resetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetOsVersion"></a>

```typescript
public resetOsVersion(): void
```

##### `resetScreenlockType` <a name="resetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetScreenlockType"></a>

```typescript
public resetScreenlockType(): void
```

##### `resetSecureHardwarePresent` <a name="resetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetSecureHardwarePresent"></a>

```typescript
public resetSecureHardwarePresent(): void
```

##### `resetThirdPartySignalProviders` <a name="resetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetThirdPartySignalProviders"></a>

```typescript
public resetThirdPartySignalProviders(): void
```

##### `resetTpspBrowserVersion` <a name="resetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBrowserVersion"></a>

```typescript
public resetTpspBrowserVersion(): void
```

##### `resetTpspBuiltinDnsClientEnabled` <a name="resetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspBuiltinDnsClientEnabled"></a>

```typescript
public resetTpspBuiltinDnsClientEnabled(): void
```

##### `resetTpspChromeRemoteDesktopAppBlocked` <a name="resetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public resetTpspChromeRemoteDesktopAppBlocked(): void
```

##### `resetTpspDeviceEnrollmentDomain` <a name="resetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDeviceEnrollmentDomain"></a>

```typescript
public resetTpspDeviceEnrollmentDomain(): void
```

##### `resetTpspDiskEncrypted` <a name="resetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspDiskEncrypted"></a>

```typescript
public resetTpspDiskEncrypted(): void
```

##### `resetTpspKeyTrustLevel` <a name="resetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspKeyTrustLevel"></a>

```typescript
public resetTpspKeyTrustLevel(): void
```

##### `resetTpspOsFirewall` <a name="resetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsFirewall"></a>

```typescript
public resetTpspOsFirewall(): void
```

##### `resetTpspOsVersion` <a name="resetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspOsVersion"></a>

```typescript
public resetTpspOsVersion(): void
```

##### `resetTpspPasswordProctectionWarningTrigger` <a name="resetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspPasswordProctectionWarningTrigger"></a>

```typescript
public resetTpspPasswordProctectionWarningTrigger(): void
```

##### `resetTpspRealtimeUrlCheckMode` <a name="resetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspRealtimeUrlCheckMode"></a>

```typescript
public resetTpspRealtimeUrlCheckMode(): void
```

##### `resetTpspSafeBrowsingProtectionLevel` <a name="resetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSafeBrowsingProtectionLevel"></a>

```typescript
public resetTpspSafeBrowsingProtectionLevel(): void
```

##### `resetTpspScreenLockSecured` <a name="resetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspScreenLockSecured"></a>

```typescript
public resetTpspScreenLockSecured(): void
```

##### `resetTpspSiteIsolationEnabled` <a name="resetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.resetTpspSiteIsolationEnabled"></a>

```typescript
public resetTpspSiteIsolationEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct"></a>

```typescript
import { policyDeviceAssuranceMacos } from '@cdktf/provider-okta'

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement"></a>

```typescript
import { policyDeviceAssuranceMacos } from '@cdktf/provider-okta'

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource"></a>

```typescript
import { policyDeviceAssuranceMacos } from '@cdktf/provider-okta'

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport"></a>

```typescript
import { policyDeviceAssuranceMacos } from '@cdktf/provider-okta'

policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceMacos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceMacos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceMacos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceMacos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate">lastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput">diskEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput">osVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput">screenlockTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput">secureHardwarePresentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput">thirdPartySignalProvidersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput">tpspBrowserVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput">tpspBuiltinDnsClientEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput">tpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput">tpspDeviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput">tpspDiskEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput">tpspKeyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput">tpspOsFirewallInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput">tpspOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput">tpspPasswordProctectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput">tpspRealtimeUrlCheckModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput">tpspSafeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput">tpspScreenLockSecuredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput">tpspSiteIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType">diskEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion">tpspOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdate"></a>

```typescript
public readonly lastUpdate: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `diskEncryptionTypeInput`<sup>Optional</sup> <a name="diskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionTypeInput"></a>

```typescript
public readonly diskEncryptionTypeInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersionInput"></a>

```typescript
public readonly osVersionInput: string;
```

- *Type:* string

---

##### `screenlockTypeInput`<sup>Optional</sup> <a name="screenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockTypeInput"></a>

```typescript
public readonly screenlockTypeInput: string[];
```

- *Type:* string[]

---

##### `secureHardwarePresentInput`<sup>Optional</sup> <a name="secureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresentInput"></a>

```typescript
public readonly secureHardwarePresentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thirdPartySignalProvidersInput`<sup>Optional</sup> <a name="thirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProvidersInput"></a>

```typescript
public readonly thirdPartySignalProvidersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspBrowserVersionInput`<sup>Optional</sup> <a name="tpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersionInput"></a>

```typescript
public readonly tpspBrowserVersionInput: string;
```

- *Type:* string

---

##### `tpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabledInput"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomainInput"></a>

```typescript
public readonly tpspDeviceEnrollmentDomainInput: string;
```

- *Type:* string

---

##### `tpspDiskEncryptedInput`<sup>Optional</sup> <a name="tpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncryptedInput"></a>

```typescript
public readonly tpspDiskEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspKeyTrustLevelInput`<sup>Optional</sup> <a name="tpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevelInput"></a>

```typescript
public readonly tpspKeyTrustLevelInput: string;
```

- *Type:* string

---

##### `tpspOsFirewallInput`<sup>Optional</sup> <a name="tpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewallInput"></a>

```typescript
public readonly tpspOsFirewallInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspOsVersionInput`<sup>Optional</sup> <a name="tpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersionInput"></a>

```typescript
public readonly tpspOsVersionInput: string;
```

- *Type:* string

---

##### `tpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```typescript
public readonly tpspPasswordProctectionWarningTriggerInput: string;
```

- *Type:* string

---

##### `tpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckModeInput"></a>

```typescript
public readonly tpspRealtimeUrlCheckModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevelInput: string;
```

- *Type:* string

---

##### `tpspScreenLockSecuredInput`<sup>Optional</sup> <a name="tpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecuredInput"></a>

```typescript
public readonly tpspScreenLockSecuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="tpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabledInput"></a>

```typescript
public readonly tpspSiteIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskEncryptionType`<sup>Required</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.diskEncryptionType"></a>

```typescript
public readonly diskEncryptionType: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `screenlockType`<sup>Required</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

---

##### `secureHardwarePresent`<sup>Required</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thirdPartySignalProviders`<sup>Required</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.thirdPartySignalProviders"></a>

```typescript
public readonly thirdPartySignalProviders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspBrowserVersion`<sup>Required</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBrowserVersion"></a>

```typescript
public readonly tpspBrowserVersion: string;
```

- *Type:* string

---

##### `tpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspBuiltinDnsClientEnabled"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDeviceEnrollmentDomain"></a>

```typescript
public readonly tpspDeviceEnrollmentDomain: string;
```

- *Type:* string

---

##### `tpspDiskEncrypted`<sup>Required</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspDiskEncrypted"></a>

```typescript
public readonly tpspDiskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspKeyTrustLevel`<sup>Required</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspKeyTrustLevel"></a>

```typescript
public readonly tpspKeyTrustLevel: string;
```

- *Type:* string

---

##### `tpspOsFirewall`<sup>Required</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsFirewall"></a>

```typescript
public readonly tpspOsFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspOsVersion`<sup>Required</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspOsVersion"></a>

```typescript
public readonly tpspOsVersion: string;
```

- *Type:* string

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspPasswordProctectionWarningTrigger"></a>

```typescript
public readonly tpspPasswordProctectionWarningTrigger: string;
```

- *Type:* string

---

##### `tpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspRealtimeUrlCheckMode"></a>

```typescript
public readonly tpspRealtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSafeBrowsingProtectionLevel"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevel: string;
```

- *Type:* string

---

##### `tpspScreenLockSecured`<sup>Required</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspScreenLockSecured"></a>

```typescript
public readonly tpspScreenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSiteIsolationEnabled`<sup>Required</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tpspSiteIsolationEnabled"></a>

```typescript
public readonly tpspSiteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacos.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceMacosConfig <a name="PolicyDeviceAssuranceMacosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.Initializer"></a>

```typescript
import { policyDeviceAssuranceMacos } from '@cdktf/provider-okta'

const policyDeviceAssuranceMacosConfig: policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name">name</a></code> | <code>string</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType">diskEncryptionType</a></code> | <code>string[]</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion">osVersion</a></code> | <code>string</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion">tpspOsVersion</a></code> | <code>string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider site isolation enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#name PolicyDeviceAssuranceMacos#name}

---

##### `diskEncryptionType`<sup>Optional</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.diskEncryptionType"></a>

```typescript
public readonly diskEncryptionType: string[];
```

- *Type:* string[]

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#disk_encryption_type PolicyDeviceAssuranceMacos#disk_encryption_type}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#os_version PolicyDeviceAssuranceMacos#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#screenlock_type PolicyDeviceAssuranceMacos#screenlock_type}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#secure_hardware_present PolicyDeviceAssuranceMacos#secure_hardware_present}

---

##### `thirdPartySignalProviders`<sup>Optional</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.thirdPartySignalProviders"></a>

```typescript
public readonly thirdPartySignalProviders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#third_party_signal_providers PolicyDeviceAssuranceMacos#third_party_signal_providers}

---

##### `tpspBrowserVersion`<sup>Optional</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBrowserVersion"></a>

```typescript
public readonly tpspBrowserVersion: string;
```

- *Type:* string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_browser_version PolicyDeviceAssuranceMacos#tpsp_browser_version}

---

##### `tpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceMacos#tpsp_builtin_dns_client_enabled}

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceMacos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDeviceEnrollmentDomain"></a>

```typescript
public readonly tpspDeviceEnrollmentDomain: string;
```

- *Type:* string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_device_enrollment_domain PolicyDeviceAssuranceMacos#tpsp_device_enrollment_domain}

---

##### `tpspDiskEncrypted`<sup>Optional</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspDiskEncrypted"></a>

```typescript
public readonly tpspDiskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_disk_encrypted PolicyDeviceAssuranceMacos#tpsp_disk_encrypted}

---

##### `tpspKeyTrustLevel`<sup>Optional</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspKeyTrustLevel"></a>

```typescript
public readonly tpspKeyTrustLevel: string;
```

- *Type:* string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_key_trust_level PolicyDeviceAssuranceMacos#tpsp_key_trust_level}

---

##### `tpspOsFirewall`<sup>Optional</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsFirewall"></a>

```typescript
public readonly tpspOsFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_os_firewall PolicyDeviceAssuranceMacos#tpsp_os_firewall}

---

##### `tpspOsVersion`<sup>Optional</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspOsVersion"></a>

```typescript
public readonly tpspOsVersion: string;
```

- *Type:* string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_os_version PolicyDeviceAssuranceMacos#tpsp_os_version}

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```typescript
public readonly tpspPasswordProctectionWarningTrigger: string;
```

- *Type:* string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceMacos#tpsp_password_proctection_warning_trigger}

---

##### `tpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspRealtimeUrlCheckMode"></a>

```typescript
public readonly tpspRealtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceMacos#tpsp_realtime_url_check_mode}

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevel: string;
```

- *Type:* string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceMacos#tpsp_safe_browsing_protection_level}

---

##### `tpspScreenLockSecured`<sup>Optional</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspScreenLockSecured"></a>

```typescript
public readonly tpspScreenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_screen_lock_secured PolicyDeviceAssuranceMacos#tpsp_screen_lock_secured}

---

##### `tpspSiteIsolationEnabled`<sup>Optional</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceMacos.PolicyDeviceAssuranceMacosConfig.property.tpspSiteIsolationEnabled"></a>

```typescript
public readonly tpspSiteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/resources/policy_device_assurance_macos#tpsp_site_isolation_enabled PolicyDeviceAssuranceMacos#tpsp_site_isolation_enabled}

---



