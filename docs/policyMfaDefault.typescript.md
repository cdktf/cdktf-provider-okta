# `policyMfaDefault` Submodule <a name="`policyMfaDefault` Submodule" id="@cdktf/provider-okta.policyMfaDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfaDefault <a name="PolicyMfaDefault" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default okta_policy_mfa_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer"></a>

```typescript
import { policyMfaDefault } from '@cdktf/provider-okta'

new policyMfaDefault.PolicyMfaDefault(scope: Construct, id: string, config?: PolicyMfaDefaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig">PolicyMfaDefaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig">PolicyMfaDefaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo">resetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp">resetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdps">resetExternalIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F">resetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn">resetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp">resetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp">resetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie">resetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall">resetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail">resetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp">resetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword">resetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush">resetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion">resetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms">resetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify">resetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa">resetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken">resetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion">resetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSmartCardIdp">resetSmartCardIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip">resetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn">resetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken">resetYubikeyToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDuo` <a name="resetDuo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo"></a>

```typescript
public resetDuo(): void
```

##### `resetExternalIdp` <a name="resetExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp"></a>

```typescript
public resetExternalIdp(): void
```

##### `resetExternalIdps` <a name="resetExternalIdps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdps"></a>

```typescript
public resetExternalIdps(): void
```

##### `resetFidoU2F` <a name="resetFidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F"></a>

```typescript
public resetFidoU2F(): void
```

##### `resetFidoWebauthn` <a name="resetFidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn"></a>

```typescript
public resetFidoWebauthn(): void
```

##### `resetGoogleOtp` <a name="resetGoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp"></a>

```typescript
public resetGoogleOtp(): void
```

##### `resetHotp` <a name="resetHotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp"></a>

```typescript
public resetHotp(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOie` <a name="resetIsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie"></a>

```typescript
public resetIsOie(): void
```

##### `resetOktaCall` <a name="resetOktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall"></a>

```typescript
public resetOktaCall(): void
```

##### `resetOktaEmail` <a name="resetOktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail"></a>

```typescript
public resetOktaEmail(): void
```

##### `resetOktaOtp` <a name="resetOktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp"></a>

```typescript
public resetOktaOtp(): void
```

##### `resetOktaPassword` <a name="resetOktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword"></a>

```typescript
public resetOktaPassword(): void
```

##### `resetOktaPush` <a name="resetOktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush"></a>

```typescript
public resetOktaPush(): void
```

##### `resetOktaQuestion` <a name="resetOktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion"></a>

```typescript
public resetOktaQuestion(): void
```

##### `resetOktaSms` <a name="resetOktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms"></a>

```typescript
public resetOktaSms(): void
```

##### `resetOktaVerify` <a name="resetOktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify"></a>

```typescript
public resetOktaVerify(): void
```

##### `resetOnpremMfa` <a name="resetOnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa"></a>

```typescript
public resetOnpremMfa(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetRsaToken` <a name="resetRsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken"></a>

```typescript
public resetRsaToken(): void
```

##### `resetSecurityQuestion` <a name="resetSecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion"></a>

```typescript
public resetSecurityQuestion(): void
```

##### `resetSmartCardIdp` <a name="resetSmartCardIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSmartCardIdp"></a>

```typescript
public resetSmartCardIdp(): void
```

##### `resetSymantecVip` <a name="resetSymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip"></a>

```typescript
public resetSymantecVip(): void
```

##### `resetWebauthn` <a name="resetWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn"></a>

```typescript
public resetWebauthn(): void
```

##### `resetYubikeyToken` <a name="resetYubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken"></a>

```typescript
public resetYubikeyToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyMfaDefault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct"></a>

```typescript
import { policyMfaDefault } from '@cdktf/provider-okta'

policyMfaDefault.PolicyMfaDefault.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement"></a>

```typescript
import { policyMfaDefault } from '@cdktf/provider-okta'

policyMfaDefault.PolicyMfaDefault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource"></a>

```typescript
import { policyMfaDefault } from '@cdktf/provider-okta'

policyMfaDefault.PolicyMfaDefault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport"></a>

```typescript
import { policyMfaDefault } from '@cdktf/provider-okta'

policyMfaDefault.PolicyMfaDefault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyMfaDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyMfaDefault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyMfaDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyMfaDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId">defaultIncludedGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput">duoInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput">externalIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpsInput">externalIdpsInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput">fidoU2FInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput">fidoWebauthnInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput">googleOtpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput">hotpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput">isOieInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput">oktaCallInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput">oktaEmailInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput">oktaOtpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput">oktaPasswordInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput">oktaPushInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput">oktaQuestionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput">oktaSmsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput">oktaVerifyInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput">onpremMfaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput">phoneNumberInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput">rsaTokenInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput">securityQuestionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdpInput">smartCardIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput">symantecVipInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput">webauthnInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput">yubikeyTokenInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo">duo</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp">externalIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdps">externalIdps</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F">fidoU2F</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn">fidoWebauthn</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp">googleOtp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp">hotp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie">isOie</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall">oktaCall</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail">oktaEmail</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp">oktaOtp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword">oktaPassword</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush">oktaPush</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion">oktaQuestion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms">oktaSms</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify">oktaVerify</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa">onpremMfa</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber">phoneNumber</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken">rsaToken</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion">securityQuestion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdp">smartCardIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip">symantecVip</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn">webauthn</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken">yubikeyToken</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultIncludedGroupId`<sup>Required</sup> <a name="defaultIncludedGroupId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId"></a>

```typescript
public readonly defaultIncludedGroupId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `duoInput`<sup>Optional</sup> <a name="duoInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput"></a>

```typescript
public readonly duoInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdpInput`<sup>Optional</sup> <a name="externalIdpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput"></a>

```typescript
public readonly externalIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdpsInput`<sup>Optional</sup> <a name="externalIdpsInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpsInput"></a>

```typescript
public readonly externalIdpsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `fidoU2FInput`<sup>Optional</sup> <a name="fidoU2FInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput"></a>

```typescript
public readonly fidoU2FInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoWebauthnInput`<sup>Optional</sup> <a name="fidoWebauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput"></a>

```typescript
public readonly fidoWebauthnInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `googleOtpInput`<sup>Optional</sup> <a name="googleOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput"></a>

```typescript
public readonly googleOtpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hotpInput`<sup>Optional</sup> <a name="hotpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput"></a>

```typescript
public readonly hotpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOieInput`<sup>Optional</sup> <a name="isOieInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput"></a>

```typescript
public readonly isOieInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oktaCallInput`<sup>Optional</sup> <a name="oktaCallInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput"></a>

```typescript
public readonly oktaCallInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaEmailInput`<sup>Optional</sup> <a name="oktaEmailInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput"></a>

```typescript
public readonly oktaEmailInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaOtpInput`<sup>Optional</sup> <a name="oktaOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput"></a>

```typescript
public readonly oktaOtpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPasswordInput`<sup>Optional</sup> <a name="oktaPasswordInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput"></a>

```typescript
public readonly oktaPasswordInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPushInput`<sup>Optional</sup> <a name="oktaPushInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput"></a>

```typescript
public readonly oktaPushInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaQuestionInput`<sup>Optional</sup> <a name="oktaQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput"></a>

```typescript
public readonly oktaQuestionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaSmsInput`<sup>Optional</sup> <a name="oktaSmsInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput"></a>

```typescript
public readonly oktaSmsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaVerifyInput`<sup>Optional</sup> <a name="oktaVerifyInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput"></a>

```typescript
public readonly oktaVerifyInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onpremMfaInput`<sup>Optional</sup> <a name="onpremMfaInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput"></a>

```typescript
public readonly onpremMfaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rsaTokenInput`<sup>Optional</sup> <a name="rsaTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput"></a>

```typescript
public readonly rsaTokenInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityQuestionInput`<sup>Optional</sup> <a name="securityQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput"></a>

```typescript
public readonly securityQuestionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `smartCardIdpInput`<sup>Optional</sup> <a name="smartCardIdpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdpInput"></a>

```typescript
public readonly smartCardIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `symantecVipInput`<sup>Optional</sup> <a name="symantecVipInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput"></a>

```typescript
public readonly symantecVipInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webauthnInput`<sup>Optional</sup> <a name="webauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput"></a>

```typescript
public readonly webauthnInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `yubikeyTokenInput`<sup>Optional</sup> <a name="yubikeyTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput"></a>

```typescript
public readonly yubikeyTokenInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo"></a>

```typescript
public readonly duo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdp`<sup>Required</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp"></a>

```typescript
public readonly externalIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdps`<sup>Required</sup> <a name="externalIdps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdps"></a>

```typescript
public readonly externalIdps: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

---

##### `fidoU2F`<sup>Required</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F"></a>

```typescript
public readonly fidoU2F: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoWebauthn`<sup>Required</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn"></a>

```typescript
public readonly fidoWebauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `googleOtp`<sup>Required</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp"></a>

```typescript
public readonly googleOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp"></a>

```typescript
public readonly hotp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOie`<sup>Required</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie"></a>

```typescript
public readonly isOie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oktaCall`<sup>Required</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall"></a>

```typescript
public readonly oktaCall: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaEmail`<sup>Required</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail"></a>

```typescript
public readonly oktaEmail: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaOtp`<sup>Required</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp"></a>

```typescript
public readonly oktaOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPassword`<sup>Required</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword"></a>

```typescript
public readonly oktaPassword: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPush`<sup>Required</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush"></a>

```typescript
public readonly oktaPush: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaQuestion`<sup>Required</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion"></a>

```typescript
public readonly oktaQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaSms`<sup>Required</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms"></a>

```typescript
public readonly oktaSms: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaVerify`<sup>Required</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify"></a>

```typescript
public readonly oktaVerify: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onpremMfa`<sup>Required</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa"></a>

```typescript
public readonly onpremMfa: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rsaToken`<sup>Required</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken"></a>

```typescript
public readonly rsaToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityQuestion`<sup>Required</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion"></a>

```typescript
public readonly securityQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `smartCardIdp`<sup>Required</sup> <a name="smartCardIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.smartCardIdp"></a>

```typescript
public readonly smartCardIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `symantecVip`<sup>Required</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip"></a>

```typescript
public readonly symantecVip: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn"></a>

```typescript
public readonly webauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `yubikeyToken`<sup>Required</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken"></a>

```typescript
public readonly yubikeyToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaDefaultConfig <a name="PolicyMfaDefaultConfig" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.Initializer"></a>

```typescript
import { policyMfaDefault } from '@cdktf/provider-okta'

const policyMfaDefaultConfig: policyMfaDefault.PolicyMfaDefaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo">duo</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp">externalIdp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdps">externalIdps</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string}[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F">fidoU2F</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn">fidoWebauthn</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp">googleOtp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp">hotp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie">isOie</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall">oktaCall</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail">oktaEmail</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp">oktaOtp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword">oktaPassword</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush">oktaPush</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion">oktaQuestion</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms">oktaSms</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify">oktaVerify</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa">onpremMfa</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber">phoneNumber</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken">rsaToken</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion">securityQuestion</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.smartCardIdp">smartCardIdp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#smart_card_idp PolicyMfaDefault#smart_card_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip">symantecVip</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn">webauthn</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken">yubikeyToken</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo"></a>

```typescript
public readonly duo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp"></a>

```typescript
public readonly externalIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}.

---

##### `externalIdps`<sup>Optional</sup> <a name="externalIdps" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdps"></a>

```typescript
public readonly externalIdps: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string}[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F"></a>

```typescript
public readonly fidoU2F: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn"></a>

```typescript
public readonly fidoWebauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp"></a>

```typescript
public readonly googleOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}.

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp"></a>

```typescript
public readonly hotp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie"></a>

```typescript
public readonly isOie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall"></a>

```typescript
public readonly oktaCall: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail"></a>

```typescript
public readonly oktaEmail: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp"></a>

```typescript
public readonly oktaOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword"></a>

```typescript
public readonly oktaPassword: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush"></a>

```typescript
public readonly oktaPush: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion"></a>

```typescript
public readonly oktaQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms"></a>

```typescript
public readonly oktaSms: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify"></a>

```typescript
public readonly oktaVerify: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa"></a>

```typescript
public readonly onpremMfa: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}.

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken"></a>

```typescript
public readonly rsaToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion"></a>

```typescript
public readonly securityQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}.

---

##### `smartCardIdp`<sup>Optional</sup> <a name="smartCardIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.smartCardIdp"></a>

```typescript
public readonly smartCardIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#smart_card_idp PolicyMfaDefault#smart_card_idp}.

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip"></a>

```typescript
public readonly symantecVip: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn"></a>

```typescript
public readonly webauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken"></a>

```typescript
public readonly yubikeyToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}.

---



