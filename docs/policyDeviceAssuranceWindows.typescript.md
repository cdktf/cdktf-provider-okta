# `policyDeviceAssuranceWindows` Submodule <a name="`policyDeviceAssuranceWindows` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceWindows <a name="PolicyDeviceAssuranceWindows" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows okta_policy_device_assurance_windows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer"></a>

```typescript
import { policyDeviceAssuranceWindows } from '@cdktf/provider-okta'

new policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows(scope: Construct, id: string, config: PolicyDeviceAssuranceWindowsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig">PolicyDeviceAssuranceWindowsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig">PolicyDeviceAssuranceWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType">resetDiskEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion">resetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType">resetScreenlockType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent">resetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders">resetThirdPartySignalProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion">resetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled">resetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked">resetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId">resetTpspCrowdStrikeAgentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId">resetTpspCrowdStrikeCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain">resetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted">resetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel">resetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall">resetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion">resetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger">resetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode">resetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel">resetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured">resetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled">resetTpspSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled">resetTpspSiteIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled">resetTpspThirdPartyBlockingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain">resetTpspWindowsMachineDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain">resetTpspWindowsUserDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDiskEncryptionType` <a name="resetDiskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetDiskEncryptionType"></a>

```typescript
public resetDiskEncryptionType(): void
```

##### `resetOsVersion` <a name="resetOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetOsVersion"></a>

```typescript
public resetOsVersion(): void
```

##### `resetScreenlockType` <a name="resetScreenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetScreenlockType"></a>

```typescript
public resetScreenlockType(): void
```

##### `resetSecureHardwarePresent` <a name="resetSecureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetSecureHardwarePresent"></a>

```typescript
public resetSecureHardwarePresent(): void
```

##### `resetThirdPartySignalProviders` <a name="resetThirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetThirdPartySignalProviders"></a>

```typescript
public resetThirdPartySignalProviders(): void
```

##### `resetTpspBrowserVersion` <a name="resetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBrowserVersion"></a>

```typescript
public resetTpspBrowserVersion(): void
```

##### `resetTpspBuiltinDnsClientEnabled` <a name="resetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspBuiltinDnsClientEnabled"></a>

```typescript
public resetTpspBuiltinDnsClientEnabled(): void
```

##### `resetTpspChromeRemoteDesktopAppBlocked` <a name="resetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public resetTpspChromeRemoteDesktopAppBlocked(): void
```

##### `resetTpspCrowdStrikeAgentId` <a name="resetTpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeAgentId"></a>

```typescript
public resetTpspCrowdStrikeAgentId(): void
```

##### `resetTpspCrowdStrikeCustomerId` <a name="resetTpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspCrowdStrikeCustomerId"></a>

```typescript
public resetTpspCrowdStrikeCustomerId(): void
```

##### `resetTpspDeviceEnrollmentDomain` <a name="resetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDeviceEnrollmentDomain"></a>

```typescript
public resetTpspDeviceEnrollmentDomain(): void
```

##### `resetTpspDiskEncrypted` <a name="resetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspDiskEncrypted"></a>

```typescript
public resetTpspDiskEncrypted(): void
```

##### `resetTpspKeyTrustLevel` <a name="resetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspKeyTrustLevel"></a>

```typescript
public resetTpspKeyTrustLevel(): void
```

##### `resetTpspOsFirewall` <a name="resetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsFirewall"></a>

```typescript
public resetTpspOsFirewall(): void
```

##### `resetTpspOsVersion` <a name="resetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspOsVersion"></a>

```typescript
public resetTpspOsVersion(): void
```

##### `resetTpspPasswordProctectionWarningTrigger` <a name="resetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspPasswordProctectionWarningTrigger"></a>

```typescript
public resetTpspPasswordProctectionWarningTrigger(): void
```

##### `resetTpspRealtimeUrlCheckMode` <a name="resetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspRealtimeUrlCheckMode"></a>

```typescript
public resetTpspRealtimeUrlCheckMode(): void
```

##### `resetTpspSafeBrowsingProtectionLevel` <a name="resetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSafeBrowsingProtectionLevel"></a>

```typescript
public resetTpspSafeBrowsingProtectionLevel(): void
```

##### `resetTpspScreenLockSecured` <a name="resetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspScreenLockSecured"></a>

```typescript
public resetTpspScreenLockSecured(): void
```

##### `resetTpspSecureBootEnabled` <a name="resetTpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSecureBootEnabled"></a>

```typescript
public resetTpspSecureBootEnabled(): void
```

##### `resetTpspSiteIsolationEnabled` <a name="resetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspSiteIsolationEnabled"></a>

```typescript
public resetTpspSiteIsolationEnabled(): void
```

##### `resetTpspThirdPartyBlockingEnabled` <a name="resetTpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspThirdPartyBlockingEnabled"></a>

```typescript
public resetTpspThirdPartyBlockingEnabled(): void
```

##### `resetTpspWindowsMachineDomain` <a name="resetTpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsMachineDomain"></a>

```typescript
public resetTpspWindowsMachineDomain(): void
```

##### `resetTpspWindowsUserDomain` <a name="resetTpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.resetTpspWindowsUserDomain"></a>

```typescript
public resetTpspWindowsUserDomain(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct"></a>

```typescript
import { policyDeviceAssuranceWindows } from '@cdktf/provider-okta'

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement"></a>

```typescript
import { policyDeviceAssuranceWindows } from '@cdktf/provider-okta'

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource"></a>

```typescript
import { policyDeviceAssuranceWindows } from '@cdktf/provider-okta'

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport"></a>

```typescript
import { policyDeviceAssuranceWindows } from '@cdktf/provider-okta'

policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceWindows to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate">lastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput">diskEncryptionTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput">osVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput">screenlockTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput">secureHardwarePresentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput">thirdPartySignalProvidersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput">tpspBrowserVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput">tpspBuiltinDnsClientEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput">tpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput">tpspCrowdStrikeAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput">tpspCrowdStrikeCustomerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput">tpspDeviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput">tpspDiskEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput">tpspKeyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput">tpspOsFirewallInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput">tpspOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput">tpspPasswordProctectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput">tpspRealtimeUrlCheckModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput">tpspSafeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput">tpspScreenLockSecuredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput">tpspSecureBootEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput">tpspSiteIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput">tpspThirdPartyBlockingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput">tpspWindowsMachineDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput">tpspWindowsUserDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType">diskEncryptionType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId">tpspCrowdStrikeAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId">tpspCrowdStrikeCustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion">tpspOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled">tpspSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled">tpspThirdPartyBlockingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain">tpspWindowsMachineDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain">tpspWindowsUserDomain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdate"></a>

```typescript
public readonly lastUpdate: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `diskEncryptionTypeInput`<sup>Optional</sup> <a name="diskEncryptionTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionTypeInput"></a>

```typescript
public readonly diskEncryptionTypeInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersionInput"></a>

```typescript
public readonly osVersionInput: string;
```

- *Type:* string

---

##### `screenlockTypeInput`<sup>Optional</sup> <a name="screenlockTypeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockTypeInput"></a>

```typescript
public readonly screenlockTypeInput: string[];
```

- *Type:* string[]

---

##### `secureHardwarePresentInput`<sup>Optional</sup> <a name="secureHardwarePresentInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresentInput"></a>

```typescript
public readonly secureHardwarePresentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thirdPartySignalProvidersInput`<sup>Optional</sup> <a name="thirdPartySignalProvidersInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProvidersInput"></a>

```typescript
public readonly thirdPartySignalProvidersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspBrowserVersionInput`<sup>Optional</sup> <a name="tpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersionInput"></a>

```typescript
public readonly tpspBrowserVersionInput: string;
```

- *Type:* string

---

##### `tpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabledInput"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspCrowdStrikeAgentIdInput`<sup>Optional</sup> <a name="tpspCrowdStrikeAgentIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentIdInput"></a>

```typescript
public readonly tpspCrowdStrikeAgentIdInput: string;
```

- *Type:* string

---

##### `tpspCrowdStrikeCustomerIdInput`<sup>Optional</sup> <a name="tpspCrowdStrikeCustomerIdInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerIdInput"></a>

```typescript
public readonly tpspCrowdStrikeCustomerIdInput: string;
```

- *Type:* string

---

##### `tpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomainInput"></a>

```typescript
public readonly tpspDeviceEnrollmentDomainInput: string;
```

- *Type:* string

---

##### `tpspDiskEncryptedInput`<sup>Optional</sup> <a name="tpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncryptedInput"></a>

```typescript
public readonly tpspDiskEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspKeyTrustLevelInput`<sup>Optional</sup> <a name="tpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevelInput"></a>

```typescript
public readonly tpspKeyTrustLevelInput: string;
```

- *Type:* string

---

##### `tpspOsFirewallInput`<sup>Optional</sup> <a name="tpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewallInput"></a>

```typescript
public readonly tpspOsFirewallInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspOsVersionInput`<sup>Optional</sup> <a name="tpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersionInput"></a>

```typescript
public readonly tpspOsVersionInput: string;
```

- *Type:* string

---

##### `tpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTriggerInput"></a>

```typescript
public readonly tpspPasswordProctectionWarningTriggerInput: string;
```

- *Type:* string

---

##### `tpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckModeInput"></a>

```typescript
public readonly tpspRealtimeUrlCheckModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevelInput"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevelInput: string;
```

- *Type:* string

---

##### `tpspScreenLockSecuredInput`<sup>Optional</sup> <a name="tpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecuredInput"></a>

```typescript
public readonly tpspScreenLockSecuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSecureBootEnabledInput`<sup>Optional</sup> <a name="tpspSecureBootEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabledInput"></a>

```typescript
public readonly tpspSecureBootEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="tpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabledInput"></a>

```typescript
public readonly tpspSiteIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspThirdPartyBlockingEnabledInput`<sup>Optional</sup> <a name="tpspThirdPartyBlockingEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabledInput"></a>

```typescript
public readonly tpspThirdPartyBlockingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspWindowsMachineDomainInput`<sup>Optional</sup> <a name="tpspWindowsMachineDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomainInput"></a>

```typescript
public readonly tpspWindowsMachineDomainInput: string;
```

- *Type:* string

---

##### `tpspWindowsUserDomainInput`<sup>Optional</sup> <a name="tpspWindowsUserDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomainInput"></a>

```typescript
public readonly tpspWindowsUserDomainInput: string;
```

- *Type:* string

---

##### `diskEncryptionType`<sup>Required</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.diskEncryptionType"></a>

```typescript
public readonly diskEncryptionType: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `screenlockType`<sup>Required</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

---

##### `secureHardwarePresent`<sup>Required</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `thirdPartySignalProviders`<sup>Required</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.thirdPartySignalProviders"></a>

```typescript
public readonly thirdPartySignalProviders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspBrowserVersion`<sup>Required</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBrowserVersion"></a>

```typescript
public readonly tpspBrowserVersion: string;
```

- *Type:* string

---

##### `tpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspBuiltinDnsClientEnabled"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspCrowdStrikeAgentId`<sup>Required</sup> <a name="tpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeAgentId"></a>

```typescript
public readonly tpspCrowdStrikeAgentId: string;
```

- *Type:* string

---

##### `tpspCrowdStrikeCustomerId`<sup>Required</sup> <a name="tpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspCrowdStrikeCustomerId"></a>

```typescript
public readonly tpspCrowdStrikeCustomerId: string;
```

- *Type:* string

---

##### `tpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDeviceEnrollmentDomain"></a>

```typescript
public readonly tpspDeviceEnrollmentDomain: string;
```

- *Type:* string

---

##### `tpspDiskEncrypted`<sup>Required</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspDiskEncrypted"></a>

```typescript
public readonly tpspDiskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspKeyTrustLevel`<sup>Required</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspKeyTrustLevel"></a>

```typescript
public readonly tpspKeyTrustLevel: string;
```

- *Type:* string

---

##### `tpspOsFirewall`<sup>Required</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsFirewall"></a>

```typescript
public readonly tpspOsFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspOsVersion`<sup>Required</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspOsVersion"></a>

```typescript
public readonly tpspOsVersion: string;
```

- *Type:* string

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspPasswordProctectionWarningTrigger"></a>

```typescript
public readonly tpspPasswordProctectionWarningTrigger: string;
```

- *Type:* string

---

##### `tpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspRealtimeUrlCheckMode"></a>

```typescript
public readonly tpspRealtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSafeBrowsingProtectionLevel"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevel: string;
```

- *Type:* string

---

##### `tpspScreenLockSecured`<sup>Required</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspScreenLockSecured"></a>

```typescript
public readonly tpspScreenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSecureBootEnabled`<sup>Required</sup> <a name="tpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSecureBootEnabled"></a>

```typescript
public readonly tpspSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSiteIsolationEnabled`<sup>Required</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspSiteIsolationEnabled"></a>

```typescript
public readonly tpspSiteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspThirdPartyBlockingEnabled`<sup>Required</sup> <a name="tpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspThirdPartyBlockingEnabled"></a>

```typescript
public readonly tpspThirdPartyBlockingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspWindowsMachineDomain`<sup>Required</sup> <a name="tpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsMachineDomain"></a>

```typescript
public readonly tpspWindowsMachineDomain: string;
```

- *Type:* string

---

##### `tpspWindowsUserDomain`<sup>Required</sup> <a name="tpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tpspWindowsUserDomain"></a>

```typescript
public readonly tpspWindowsUserDomain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindows.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceWindowsConfig <a name="PolicyDeviceAssuranceWindowsConfig" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.Initializer"></a>

```typescript
import { policyDeviceAssuranceWindows } from '@cdktf/provider-okta'

const policyDeviceAssuranceWindowsConfig: policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name">name</a></code> | <code>string</code> | Name of the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType">diskEncryptionType</a></code> | <code>string[]</code> | List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion">osVersion</a></code> | <code>string</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType">screenlockType</a></code> | <code>string[]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent">secureHardwarePresent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the device secure with hardware in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders">thirdPartySignalProviders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Check to include third party signal provider. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider builtin dns client enable. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId">tpspCrowdStrikeAgentId</a></code> | <code>string</code> | Third party signal provider crowdstrike agent id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId">tpspCrowdStrikeCustomerId</a></code> | <code>string</code> | Third party signal provider crowdstrike user id. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion">tpspOsVersion</a></code> | <code>string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled">tpspSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider secure boot enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider site isolation enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled">tpspThirdPartyBlockingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider third party blocking enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain">tpspWindowsMachineDomain</a></code> | <code>string</code> | Third party signal provider windows machine domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain">tpspWindowsUserDomain</a></code> | <code>string</code> | Third party signal provider windows user domain. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}

---

##### `diskEncryptionType`<sup>Optional</sup> <a name="diskEncryptionType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.diskEncryptionType"></a>

```typescript
public readonly diskEncryptionType: string[];
```

- *Type:* string[]

List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}

---

##### `osVersion`<sup>Optional</sup> <a name="osVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}

---

##### `screenlockType`<sup>Optional</sup> <a name="screenlockType" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.screenlockType"></a>

```typescript
public readonly screenlockType: string[];
```

- *Type:* string[]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}

---

##### `secureHardwarePresent`<sup>Optional</sup> <a name="secureHardwarePresent" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.secureHardwarePresent"></a>

```typescript
public readonly secureHardwarePresent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the device secure with hardware in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}

---

##### `thirdPartySignalProviders`<sup>Optional</sup> <a name="thirdPartySignalProviders" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.thirdPartySignalProviders"></a>

```typescript
public readonly thirdPartySignalProviders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Check to include third party signal provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}

---

##### `tpspBrowserVersion`<sup>Optional</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBrowserVersion"></a>

```typescript
public readonly tpspBrowserVersion: string;
```

- *Type:* string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}

---

##### `tpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspBuiltinDnsClientEnabled"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider builtin dns client enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpspCrowdStrikeAgentId`<sup>Optional</sup> <a name="tpspCrowdStrikeAgentId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeAgentId"></a>

```typescript
public readonly tpspCrowdStrikeAgentId: string;
```

- *Type:* string

Third party signal provider crowdstrike agent id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}

---

##### `tpspCrowdStrikeCustomerId`<sup>Optional</sup> <a name="tpspCrowdStrikeCustomerId" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspCrowdStrikeCustomerId"></a>

```typescript
public readonly tpspCrowdStrikeCustomerId: string;
```

- *Type:* string

Third party signal provider crowdstrike user id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}

---

##### `tpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDeviceEnrollmentDomain"></a>

```typescript
public readonly tpspDeviceEnrollmentDomain: string;
```

- *Type:* string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}

---

##### `tpspDiskEncrypted`<sup>Optional</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspDiskEncrypted"></a>

```typescript
public readonly tpspDiskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}

---

##### `tpspKeyTrustLevel`<sup>Optional</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspKeyTrustLevel"></a>

```typescript
public readonly tpspKeyTrustLevel: string;
```

- *Type:* string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}

---

##### `tpspOsFirewall`<sup>Optional</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsFirewall"></a>

```typescript
public readonly tpspOsFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}

---

##### `tpspOsVersion`<sup>Optional</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspOsVersion"></a>

```typescript
public readonly tpspOsVersion: string;
```

- *Type:* string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```typescript
public readonly tpspPasswordProctectionWarningTrigger: string;
```

- *Type:* string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}

---

##### `tpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspRealtimeUrlCheckMode"></a>

```typescript
public readonly tpspRealtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevel: string;
```

- *Type:* string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}

---

##### `tpspScreenLockSecured`<sup>Optional</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspScreenLockSecured"></a>

```typescript
public readonly tpspScreenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}

---

##### `tpspSecureBootEnabled`<sup>Optional</sup> <a name="tpspSecureBootEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSecureBootEnabled"></a>

```typescript
public readonly tpspSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider secure boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}

---

##### `tpspSiteIsolationEnabled`<sup>Optional</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspSiteIsolationEnabled"></a>

```typescript
public readonly tpspSiteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}

---

##### `tpspThirdPartyBlockingEnabled`<sup>Optional</sup> <a name="tpspThirdPartyBlockingEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspThirdPartyBlockingEnabled"></a>

```typescript
public readonly tpspThirdPartyBlockingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider third party blocking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}

---

##### `tpspWindowsMachineDomain`<sup>Optional</sup> <a name="tpspWindowsMachineDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsMachineDomain"></a>

```typescript
public readonly tpspWindowsMachineDomain: string;
```

- *Type:* string

Third party signal provider windows machine domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}

---

##### `tpspWindowsUserDomain`<sup>Optional</sup> <a name="tpspWindowsUserDomain" id="@cdktf/provider-okta.policyDeviceAssuranceWindows.PolicyDeviceAssuranceWindowsConfig.property.tpspWindowsUserDomain"></a>

```typescript
public readonly tpspWindowsUserDomain: string;
```

- *Type:* string

Third party signal provider windows user domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}

---



