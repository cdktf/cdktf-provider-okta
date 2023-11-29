# `policyDeviceAssuranceChromeos` Submodule <a name="`policyDeviceAssuranceChromeos` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceChromeos <a name="PolicyDeviceAssuranceChromeos" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos okta_policy_device_assurance_chromeos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer"></a>

```typescript
import { policyDeviceAssuranceChromeos } from '@cdktf/provider-okta'

new policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos(scope: Construct, id: string, config: PolicyDeviceAssuranceChromeosConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig">PolicyDeviceAssuranceChromeosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig">PolicyDeviceAssuranceChromeosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspAllowScreenLock">resetTpspAllowScreenLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBrowserVersion">resetTpspBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBuiltinDnsClientEnabled">resetTpspBuiltinDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspChromeRemoteDesktopAppBlocked">resetTpspChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDeviceEnrollmentDomain">resetTpspDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDiskEncrypted">resetTpspDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspKeyTrustLevel">resetTpspKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsFirewall">resetTpspOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsVersion">resetTpspOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspPasswordProctectionWarningTrigger">resetTpspPasswordProctectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspRealtimeUrlCheckMode">resetTpspRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSafeBrowsingProtectionLevel">resetTpspSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspScreenLockSecured">resetTpspScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSiteIsolationEnabled">resetTpspSiteIsolationEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetTpspAllowScreenLock` <a name="resetTpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspAllowScreenLock"></a>

```typescript
public resetTpspAllowScreenLock(): void
```

##### `resetTpspBrowserVersion` <a name="resetTpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBrowserVersion"></a>

```typescript
public resetTpspBrowserVersion(): void
```

##### `resetTpspBuiltinDnsClientEnabled` <a name="resetTpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspBuiltinDnsClientEnabled"></a>

```typescript
public resetTpspBuiltinDnsClientEnabled(): void
```

##### `resetTpspChromeRemoteDesktopAppBlocked` <a name="resetTpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public resetTpspChromeRemoteDesktopAppBlocked(): void
```

##### `resetTpspDeviceEnrollmentDomain` <a name="resetTpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDeviceEnrollmentDomain"></a>

```typescript
public resetTpspDeviceEnrollmentDomain(): void
```

##### `resetTpspDiskEncrypted` <a name="resetTpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspDiskEncrypted"></a>

```typescript
public resetTpspDiskEncrypted(): void
```

##### `resetTpspKeyTrustLevel` <a name="resetTpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspKeyTrustLevel"></a>

```typescript
public resetTpspKeyTrustLevel(): void
```

##### `resetTpspOsFirewall` <a name="resetTpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsFirewall"></a>

```typescript
public resetTpspOsFirewall(): void
```

##### `resetTpspOsVersion` <a name="resetTpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspOsVersion"></a>

```typescript
public resetTpspOsVersion(): void
```

##### `resetTpspPasswordProctectionWarningTrigger` <a name="resetTpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspPasswordProctectionWarningTrigger"></a>

```typescript
public resetTpspPasswordProctectionWarningTrigger(): void
```

##### `resetTpspRealtimeUrlCheckMode` <a name="resetTpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspRealtimeUrlCheckMode"></a>

```typescript
public resetTpspRealtimeUrlCheckMode(): void
```

##### `resetTpspSafeBrowsingProtectionLevel` <a name="resetTpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSafeBrowsingProtectionLevel"></a>

```typescript
public resetTpspSafeBrowsingProtectionLevel(): void
```

##### `resetTpspScreenLockSecured` <a name="resetTpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspScreenLockSecured"></a>

```typescript
public resetTpspScreenLockSecured(): void
```

##### `resetTpspSiteIsolationEnabled` <a name="resetTpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.resetTpspSiteIsolationEnabled"></a>

```typescript
public resetTpspSiteIsolationEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceChromeos resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct"></a>

```typescript
import { policyDeviceAssuranceChromeos } from '@cdktf/provider-okta'

policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement"></a>

```typescript
import { policyDeviceAssuranceChromeos } from '@cdktf/provider-okta'

policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource"></a>

```typescript
import { policyDeviceAssuranceChromeos } from '@cdktf/provider-okta'

policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport"></a>

```typescript
import { policyDeviceAssuranceChromeos } from '@cdktf/provider-okta'

policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceChromeos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyDeviceAssuranceChromeos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyDeviceAssuranceChromeos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceChromeos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdate">lastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLockInput">tpspAllowScreenLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersionInput">tpspBrowserVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabledInput">tpspBuiltinDnsClientEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlockedInput">tpspChromeRemoteDesktopAppBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomainInput">tpspDeviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncryptedInput">tpspDiskEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevelInput">tpspKeyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewallInput">tpspOsFirewallInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersionInput">tpspOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTriggerInput">tpspPasswordProctectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckModeInput">tpspRealtimeUrlCheckModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevelInput">tpspSafeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecuredInput">tpspScreenLockSecuredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabledInput">tpspSiteIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLock">tpspAllowScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersion">tpspOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdate"></a>

```typescript
public readonly lastUpdate: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tpspAllowScreenLockInput`<sup>Optional</sup> <a name="tpspAllowScreenLockInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLockInput"></a>

```typescript
public readonly tpspAllowScreenLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspBrowserVersionInput`<sup>Optional</sup> <a name="tpspBrowserVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersionInput"></a>

```typescript
public readonly tpspBrowserVersionInput: string;
```

- *Type:* string

---

##### `tpspBuiltinDnsClientEnabledInput`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabledInput"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlockedInput"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspDeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomainInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomainInput"></a>

```typescript
public readonly tpspDeviceEnrollmentDomainInput: string;
```

- *Type:* string

---

##### `tpspDiskEncryptedInput`<sup>Optional</sup> <a name="tpspDiskEncryptedInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncryptedInput"></a>

```typescript
public readonly tpspDiskEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspKeyTrustLevelInput`<sup>Optional</sup> <a name="tpspKeyTrustLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevelInput"></a>

```typescript
public readonly tpspKeyTrustLevelInput: string;
```

- *Type:* string

---

##### `tpspOsFirewallInput`<sup>Optional</sup> <a name="tpspOsFirewallInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewallInput"></a>

```typescript
public readonly tpspOsFirewallInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspOsVersionInput`<sup>Optional</sup> <a name="tpspOsVersionInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersionInput"></a>

```typescript
public readonly tpspOsVersionInput: string;
```

- *Type:* string

---

##### `tpspPasswordProctectionWarningTriggerInput`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTriggerInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTriggerInput"></a>

```typescript
public readonly tpspPasswordProctectionWarningTriggerInput: string;
```

- *Type:* string

---

##### `tpspRealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckModeInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckModeInput"></a>

```typescript
public readonly tpspRealtimeUrlCheckModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevelInput"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevelInput: string;
```

- *Type:* string

---

##### `tpspScreenLockSecuredInput`<sup>Optional</sup> <a name="tpspScreenLockSecuredInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecuredInput"></a>

```typescript
public readonly tpspScreenLockSecuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSiteIsolationEnabledInput`<sup>Optional</sup> <a name="tpspSiteIsolationEnabledInput" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabledInput"></a>

```typescript
public readonly tpspSiteIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tpspAllowScreenLock`<sup>Required</sup> <a name="tpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspAllowScreenLock"></a>

```typescript
public readonly tpspAllowScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspBrowserVersion`<sup>Required</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBrowserVersion"></a>

```typescript
public readonly tpspBrowserVersion: string;
```

- *Type:* string

---

##### `tpspBuiltinDnsClientEnabled`<sup>Required</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspBuiltinDnsClientEnabled"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspDeviceEnrollmentDomain`<sup>Required</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDeviceEnrollmentDomain"></a>

```typescript
public readonly tpspDeviceEnrollmentDomain: string;
```

- *Type:* string

---

##### `tpspDiskEncrypted`<sup>Required</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspDiskEncrypted"></a>

```typescript
public readonly tpspDiskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspKeyTrustLevel`<sup>Required</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspKeyTrustLevel"></a>

```typescript
public readonly tpspKeyTrustLevel: string;
```

- *Type:* string

---

##### `tpspOsFirewall`<sup>Required</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsFirewall"></a>

```typescript
public readonly tpspOsFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspOsVersion`<sup>Required</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspOsVersion"></a>

```typescript
public readonly tpspOsVersion: string;
```

- *Type:* string

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Required</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspPasswordProctectionWarningTrigger"></a>

```typescript
public readonly tpspPasswordProctectionWarningTrigger: string;
```

- *Type:* string

---

##### `tpspRealtimeUrlCheckMode`<sup>Required</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspRealtimeUrlCheckMode"></a>

```typescript
public readonly tpspRealtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Required</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSafeBrowsingProtectionLevel"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevel: string;
```

- *Type:* string

---

##### `tpspScreenLockSecured`<sup>Required</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspScreenLockSecured"></a>

```typescript
public readonly tpspScreenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tpspSiteIsolationEnabled`<sup>Required</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tpspSiteIsolationEnabled"></a>

```typescript
public readonly tpspSiteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeos.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceChromeosConfig <a name="PolicyDeviceAssuranceChromeosConfig" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.Initializer"></a>

```typescript
import { policyDeviceAssuranceChromeos } from '@cdktf/provider-okta'

const policyDeviceAssuranceChromeosConfig: policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.name">name</a></code> | <code>string</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspAllowScreenLock">tpspAllowScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider allow screen lock. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBrowserVersion">tpspBrowserVersion</a></code> | <code>string</code> | Third party signal provider minimum browser version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBuiltinDnsClientEnabled">tpspBuiltinDnsClientEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider builtin dns client enabled. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspChromeRemoteDesktopAppBlocked">tpspChromeRemoteDesktopAppBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider chrome remote desktop app blocked. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDeviceEnrollmentDomain">tpspDeviceEnrollmentDomain</a></code> | <code>string</code> | Third party signal provider device enrollment domain. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDiskEncrypted">tpspDiskEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider disk encrypted. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspKeyTrustLevel">tpspKeyTrustLevel</a></code> | <code>string</code> | Third party signal provider key trust level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsFirewall">tpspOsFirewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider os firewall. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsVersion">tpspOsVersion</a></code> | <code>string</code> | Third party signal provider minimum os version. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspPasswordProctectionWarningTrigger">tpspPasswordProctectionWarningTrigger</a></code> | <code>string</code> | Third party signal provider password protection warning trigger. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspRealtimeUrlCheckMode">tpspRealtimeUrlCheckMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider realtime url check mode. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSafeBrowsingProtectionLevel">tpspSafeBrowsingProtectionLevel</a></code> | <code>string</code> | Third party signal provider safe browsing protection level. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspScreenLockSecured">tpspScreenLockSecured</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider screen lock secure. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSiteIsolationEnabled">tpspSiteIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Third party signal provider site isolation enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#name PolicyDeviceAssuranceChromeos#name}

---

##### `tpspAllowScreenLock`<sup>Optional</sup> <a name="tpspAllowScreenLock" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspAllowScreenLock"></a>

```typescript
public readonly tpspAllowScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider allow screen lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_allow_screen_lock PolicyDeviceAssuranceChromeos#tpsp_allow_screen_lock}

---

##### `tpspBrowserVersion`<sup>Optional</sup> <a name="tpspBrowserVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBrowserVersion"></a>

```typescript
public readonly tpspBrowserVersion: string;
```

- *Type:* string

Third party signal provider minimum browser version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_browser_version PolicyDeviceAssuranceChromeos#tpsp_browser_version}

---

##### `tpspBuiltinDnsClientEnabled`<sup>Optional</sup> <a name="tpspBuiltinDnsClientEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspBuiltinDnsClientEnabled"></a>

```typescript
public readonly tpspBuiltinDnsClientEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider builtin dns client enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceChromeos#tpsp_builtin_dns_client_enabled}

---

##### `tpspChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="tpspChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspChromeRemoteDesktopAppBlocked"></a>

```typescript
public readonly tpspChromeRemoteDesktopAppBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider chrome remote desktop app blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceChromeos#tpsp_chrome_remote_desktop_app_blocked}

---

##### `tpspDeviceEnrollmentDomain`<sup>Optional</sup> <a name="tpspDeviceEnrollmentDomain" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDeviceEnrollmentDomain"></a>

```typescript
public readonly tpspDeviceEnrollmentDomain: string;
```

- *Type:* string

Third party signal provider device enrollment domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_device_enrollment_domain PolicyDeviceAssuranceChromeos#tpsp_device_enrollment_domain}

---

##### `tpspDiskEncrypted`<sup>Optional</sup> <a name="tpspDiskEncrypted" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspDiskEncrypted"></a>

```typescript
public readonly tpspDiskEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider disk encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_disk_encrypted PolicyDeviceAssuranceChromeos#tpsp_disk_encrypted}

---

##### `tpspKeyTrustLevel`<sup>Optional</sup> <a name="tpspKeyTrustLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspKeyTrustLevel"></a>

```typescript
public readonly tpspKeyTrustLevel: string;
```

- *Type:* string

Third party signal provider key trust level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_key_trust_level PolicyDeviceAssuranceChromeos#tpsp_key_trust_level}

---

##### `tpspOsFirewall`<sup>Optional</sup> <a name="tpspOsFirewall" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsFirewall"></a>

```typescript
public readonly tpspOsFirewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider os firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_os_firewall PolicyDeviceAssuranceChromeos#tpsp_os_firewall}

---

##### `tpspOsVersion`<sup>Optional</sup> <a name="tpspOsVersion" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspOsVersion"></a>

```typescript
public readonly tpspOsVersion: string;
```

- *Type:* string

Third party signal provider minimum os version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_os_version PolicyDeviceAssuranceChromeos#tpsp_os_version}

---

##### `tpspPasswordProctectionWarningTrigger`<sup>Optional</sup> <a name="tpspPasswordProctectionWarningTrigger" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspPasswordProctectionWarningTrigger"></a>

```typescript
public readonly tpspPasswordProctectionWarningTrigger: string;
```

- *Type:* string

Third party signal provider password protection warning trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceChromeos#tpsp_password_proctection_warning_trigger}

---

##### `tpspRealtimeUrlCheckMode`<sup>Optional</sup> <a name="tpspRealtimeUrlCheckMode" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspRealtimeUrlCheckMode"></a>

```typescript
public readonly tpspRealtimeUrlCheckMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider realtime url check mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceChromeos#tpsp_realtime_url_check_mode}

---

##### `tpspSafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="tpspSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSafeBrowsingProtectionLevel"></a>

```typescript
public readonly tpspSafeBrowsingProtectionLevel: string;
```

- *Type:* string

Third party signal provider safe browsing protection level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceChromeos#tpsp_safe_browsing_protection_level}

---

##### `tpspScreenLockSecured`<sup>Optional</sup> <a name="tpspScreenLockSecured" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspScreenLockSecured"></a>

```typescript
public readonly tpspScreenLockSecured: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider screen lock secure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_screen_lock_secured PolicyDeviceAssuranceChromeos#tpsp_screen_lock_secured}

---

##### `tpspSiteIsolationEnabled`<sup>Optional</sup> <a name="tpspSiteIsolationEnabled" id="@cdktf/provider-okta.policyDeviceAssuranceChromeos.PolicyDeviceAssuranceChromeosConfig.property.tpspSiteIsolationEnabled"></a>

```typescript
public readonly tpspSiteIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Third party signal provider site isolation enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.2/docs/resources/policy_device_assurance_chromeos#tpsp_site_isolation_enabled PolicyDeviceAssuranceChromeos#tpsp_site_isolation_enabled}

---



