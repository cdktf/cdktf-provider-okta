# `policyPassword` Submodule <a name="`policyPassword` Submodule" id="@cdktf/provider-okta.policyPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPassword <a name="PolicyPassword" id="@cdktf/provider-okta.policyPassword.PolicyPassword"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password okta_policy_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer"></a>

```typescript
import { policyPassword } from '@cdktf/provider-okta'

new policyPassword.PolicyPassword(scope: Construct, id: string, config: PolicyPasswordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig">PolicyPasswordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig">PolicyPasswordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery">resetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery">resetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes">resetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup">resetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName">resetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName">resetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername">resetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays">resetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount">resetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels">resetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays">resetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts">resetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes">resetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength">resetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase">resetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber">resetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol">resetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase">resetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures">resetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength">resetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery">resetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken">resetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock">resetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery">resetSmsRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthProvider` <a name="resetAuthProvider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider"></a>

```typescript
public resetAuthProvider(): void
```

##### `resetCallRecovery` <a name="resetCallRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery"></a>

```typescript
public resetCallRecovery(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEmailRecovery` <a name="resetEmailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery"></a>

```typescript
public resetEmailRecovery(): void
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded"></a>

```typescript
public resetGroupsIncluded(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPasswordAutoUnlockMinutes` <a name="resetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes"></a>

```typescript
public resetPasswordAutoUnlockMinutes(): void
```

##### `resetPasswordDictionaryLookup` <a name="resetPasswordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup"></a>

```typescript
public resetPasswordDictionaryLookup(): void
```

##### `resetPasswordExcludeFirstName` <a name="resetPasswordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName"></a>

```typescript
public resetPasswordExcludeFirstName(): void
```

##### `resetPasswordExcludeLastName` <a name="resetPasswordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName"></a>

```typescript
public resetPasswordExcludeLastName(): void
```

##### `resetPasswordExcludeUsername` <a name="resetPasswordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername"></a>

```typescript
public resetPasswordExcludeUsername(): void
```

##### `resetPasswordExpireWarnDays` <a name="resetPasswordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays"></a>

```typescript
public resetPasswordExpireWarnDays(): void
```

##### `resetPasswordHistoryCount` <a name="resetPasswordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount"></a>

```typescript
public resetPasswordHistoryCount(): void
```

##### `resetPasswordLockoutNotificationChannels` <a name="resetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels"></a>

```typescript
public resetPasswordLockoutNotificationChannels(): void
```

##### `resetPasswordMaxAgeDays` <a name="resetPasswordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays"></a>

```typescript
public resetPasswordMaxAgeDays(): void
```

##### `resetPasswordMaxLockoutAttempts` <a name="resetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts"></a>

```typescript
public resetPasswordMaxLockoutAttempts(): void
```

##### `resetPasswordMinAgeMinutes` <a name="resetPasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes"></a>

```typescript
public resetPasswordMinAgeMinutes(): void
```

##### `resetPasswordMinLength` <a name="resetPasswordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength"></a>

```typescript
public resetPasswordMinLength(): void
```

##### `resetPasswordMinLowercase` <a name="resetPasswordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase"></a>

```typescript
public resetPasswordMinLowercase(): void
```

##### `resetPasswordMinNumber` <a name="resetPasswordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber"></a>

```typescript
public resetPasswordMinNumber(): void
```

##### `resetPasswordMinSymbol` <a name="resetPasswordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol"></a>

```typescript
public resetPasswordMinSymbol(): void
```

##### `resetPasswordMinUppercase` <a name="resetPasswordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase"></a>

```typescript
public resetPasswordMinUppercase(): void
```

##### `resetPasswordShowLockoutFailures` <a name="resetPasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures"></a>

```typescript
public resetPasswordShowLockoutFailures(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetQuestionMinLength` <a name="resetQuestionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength"></a>

```typescript
public resetQuestionMinLength(): void
```

##### `resetQuestionRecovery` <a name="resetQuestionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery"></a>

```typescript
public resetQuestionRecovery(): void
```

##### `resetRecoveryEmailToken` <a name="resetRecoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken"></a>

```typescript
public resetRecoveryEmailToken(): void
```

##### `resetSkipUnlock` <a name="resetSkipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock"></a>

```typescript
public resetSkipUnlock(): void
```

##### `resetSmsRecovery` <a name="resetSmsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery"></a>

```typescript
public resetSmsRecovery(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct"></a>

```typescript
import { policyPassword } from '@cdktf/provider-okta'

policyPassword.PolicyPassword.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement"></a>

```typescript
import { policyPassword } from '@cdktf/provider-okta'

policyPassword.PolicyPassword.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource"></a>

```typescript
import { policyPassword } from '@cdktf/provider-okta'

policyPassword.PolicyPassword.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport"></a>

```typescript
import { policyPassword } from '@cdktf/provider-okta'

policyPassword.PolicyPassword.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyPassword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput">authProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput">callRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput">emailRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput">passwordAutoUnlockMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput">passwordDictionaryLookupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput">passwordExcludeFirstNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput">passwordExcludeLastNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput">passwordExcludeUsernameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput">passwordExpireWarnDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput">passwordHistoryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput">passwordLockoutNotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput">passwordMaxAgeDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput">passwordMaxLockoutAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput">passwordMinAgeMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput">passwordMinLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput">passwordMinLowercaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput">passwordMinNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput">passwordMinSymbolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput">passwordMinUppercaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput">passwordShowLockoutFailuresInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput">questionMinLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput">questionRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput">recoveryEmailTokenInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput">skipUnlockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput">smsRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider">authProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery">callRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery">emailRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength">passwordMinLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber">passwordMinNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength">questionMinLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery">questionRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock">skipUnlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery">smsRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput"></a>

```typescript
public readonly authProviderInput: string;
```

- *Type:* string

---

##### `callRecoveryInput`<sup>Optional</sup> <a name="callRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput"></a>

```typescript
public readonly callRecoveryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailRecoveryInput`<sup>Optional</sup> <a name="emailRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput"></a>

```typescript
public readonly emailRecoveryInput: string;
```

- *Type:* string

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput"></a>

```typescript
public readonly groupsIncludedInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="passwordAutoUnlockMinutesInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput"></a>

```typescript
public readonly passwordAutoUnlockMinutesInput: number;
```

- *Type:* number

---

##### `passwordDictionaryLookupInput`<sup>Optional</sup> <a name="passwordDictionaryLookupInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput"></a>

```typescript
public readonly passwordDictionaryLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeFirstNameInput`<sup>Optional</sup> <a name="passwordExcludeFirstNameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput"></a>

```typescript
public readonly passwordExcludeFirstNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeLastNameInput`<sup>Optional</sup> <a name="passwordExcludeLastNameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput"></a>

```typescript
public readonly passwordExcludeLastNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeUsernameInput`<sup>Optional</sup> <a name="passwordExcludeUsernameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput"></a>

```typescript
public readonly passwordExcludeUsernameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExpireWarnDaysInput`<sup>Optional</sup> <a name="passwordExpireWarnDaysInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput"></a>

```typescript
public readonly passwordExpireWarnDaysInput: number;
```

- *Type:* number

---

##### `passwordHistoryCountInput`<sup>Optional</sup> <a name="passwordHistoryCountInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput"></a>

```typescript
public readonly passwordHistoryCountInput: number;
```

- *Type:* number

---

##### `passwordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="passwordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput"></a>

```typescript
public readonly passwordLockoutNotificationChannelsInput: string[];
```

- *Type:* string[]

---

##### `passwordMaxAgeDaysInput`<sup>Optional</sup> <a name="passwordMaxAgeDaysInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput"></a>

```typescript
public readonly passwordMaxAgeDaysInput: number;
```

- *Type:* number

---

##### `passwordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="passwordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput"></a>

```typescript
public readonly passwordMaxLockoutAttemptsInput: number;
```

- *Type:* number

---

##### `passwordMinAgeMinutesInput`<sup>Optional</sup> <a name="passwordMinAgeMinutesInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput"></a>

```typescript
public readonly passwordMinAgeMinutesInput: number;
```

- *Type:* number

---

##### `passwordMinLengthInput`<sup>Optional</sup> <a name="passwordMinLengthInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput"></a>

```typescript
public readonly passwordMinLengthInput: number;
```

- *Type:* number

---

##### `passwordMinLowercaseInput`<sup>Optional</sup> <a name="passwordMinLowercaseInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput"></a>

```typescript
public readonly passwordMinLowercaseInput: number;
```

- *Type:* number

---

##### `passwordMinNumberInput`<sup>Optional</sup> <a name="passwordMinNumberInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput"></a>

```typescript
public readonly passwordMinNumberInput: number;
```

- *Type:* number

---

##### `passwordMinSymbolInput`<sup>Optional</sup> <a name="passwordMinSymbolInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput"></a>

```typescript
public readonly passwordMinSymbolInput: number;
```

- *Type:* number

---

##### `passwordMinUppercaseInput`<sup>Optional</sup> <a name="passwordMinUppercaseInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput"></a>

```typescript
public readonly passwordMinUppercaseInput: number;
```

- *Type:* number

---

##### `passwordShowLockoutFailuresInput`<sup>Optional</sup> <a name="passwordShowLockoutFailuresInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput"></a>

```typescript
public readonly passwordShowLockoutFailuresInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `questionMinLengthInput`<sup>Optional</sup> <a name="questionMinLengthInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput"></a>

```typescript
public readonly questionMinLengthInput: number;
```

- *Type:* number

---

##### `questionRecoveryInput`<sup>Optional</sup> <a name="questionRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput"></a>

```typescript
public readonly questionRecoveryInput: string;
```

- *Type:* string

---

##### `recoveryEmailTokenInput`<sup>Optional</sup> <a name="recoveryEmailTokenInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput"></a>

```typescript
public readonly recoveryEmailTokenInput: number;
```

- *Type:* number

---

##### `skipUnlockInput`<sup>Optional</sup> <a name="skipUnlockInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput"></a>

```typescript
public readonly skipUnlockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smsRecoveryInput`<sup>Optional</sup> <a name="smsRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput"></a>

```typescript
public readonly smsRecoveryInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider"></a>

```typescript
public readonly authProvider: string;
```

- *Type:* string

---

##### `callRecovery`<sup>Required</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery"></a>

```typescript
public readonly callRecovery: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailRecovery`<sup>Required</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery"></a>

```typescript
public readonly emailRecovery: string;
```

- *Type:* string

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `passwordAutoUnlockMinutes`<sup>Required</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes"></a>

```typescript
public readonly passwordAutoUnlockMinutes: number;
```

- *Type:* number

---

##### `passwordDictionaryLookup`<sup>Required</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup"></a>

```typescript
public readonly passwordDictionaryLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeFirstName`<sup>Required</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName"></a>

```typescript
public readonly passwordExcludeFirstName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeLastName`<sup>Required</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName"></a>

```typescript
public readonly passwordExcludeLastName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeUsername`<sup>Required</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername"></a>

```typescript
public readonly passwordExcludeUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExpireWarnDays`<sup>Required</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays"></a>

```typescript
public readonly passwordExpireWarnDays: number;
```

- *Type:* number

---

##### `passwordHistoryCount`<sup>Required</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount"></a>

```typescript
public readonly passwordHistoryCount: number;
```

- *Type:* number

---

##### `passwordLockoutNotificationChannels`<sup>Required</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels"></a>

```typescript
public readonly passwordLockoutNotificationChannels: string[];
```

- *Type:* string[]

---

##### `passwordMaxAgeDays`<sup>Required</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays"></a>

```typescript
public readonly passwordMaxAgeDays: number;
```

- *Type:* number

---

##### `passwordMaxLockoutAttempts`<sup>Required</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts"></a>

```typescript
public readonly passwordMaxLockoutAttempts: number;
```

- *Type:* number

---

##### `passwordMinAgeMinutes`<sup>Required</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes"></a>

```typescript
public readonly passwordMinAgeMinutes: number;
```

- *Type:* number

---

##### `passwordMinLength`<sup>Required</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength"></a>

```typescript
public readonly passwordMinLength: number;
```

- *Type:* number

---

##### `passwordMinLowercase`<sup>Required</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase"></a>

```typescript
public readonly passwordMinLowercase: number;
```

- *Type:* number

---

##### `passwordMinNumber`<sup>Required</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber"></a>

```typescript
public readonly passwordMinNumber: number;
```

- *Type:* number

---

##### `passwordMinSymbol`<sup>Required</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol"></a>

```typescript
public readonly passwordMinSymbol: number;
```

- *Type:* number

---

##### `passwordMinUppercase`<sup>Required</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase"></a>

```typescript
public readonly passwordMinUppercase: number;
```

- *Type:* number

---

##### `passwordShowLockoutFailures`<sup>Required</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures"></a>

```typescript
public readonly passwordShowLockoutFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `questionMinLength`<sup>Required</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength"></a>

```typescript
public readonly questionMinLength: number;
```

- *Type:* number

---

##### `questionRecovery`<sup>Required</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery"></a>

```typescript
public readonly questionRecovery: string;
```

- *Type:* string

---

##### `recoveryEmailToken`<sup>Required</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken"></a>

```typescript
public readonly recoveryEmailToken: number;
```

- *Type:* number

---

##### `skipUnlock`<sup>Required</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock"></a>

```typescript
public readonly skipUnlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smsRecovery`<sup>Required</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery"></a>

```typescript
public readonly smsRecovery: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordConfig <a name="PolicyPasswordConfig" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.Initializer"></a>

```typescript
import { policyPassword } from '@cdktf/provider-okta'

const policyPasswordConfig: policyPassword.PolicyPasswordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name">name</a></code> | <code>string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider">authProvider</a></code> | <code>string</code> | Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery">callRecovery</a></code> | <code>string</code> | Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description">description</a></code> | <code>string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery">emailRecovery</a></code> | <code>string</code> | Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#id PolicyPassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>boolean \| cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>boolean \| cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>number</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>string[]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>number</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>number</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength">passwordMinLength</a></code> | <code>number</code> | Minimum password length. Default: `8`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber">passwordMinNumber</a></code> | <code>number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>boolean \| cdktf.IResolvable</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority">priority</a></code> | <code>number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength">questionMinLength</a></code> | <code>number</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery">questionRecovery</a></code> | <code>string</code> | Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>number</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock">skipUnlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery">smsRecovery</a></code> | <code>string</code> | Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status">status</a></code> | <code>string</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#name PolicyPassword#name}

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider"></a>

```typescript
public readonly authProvider: string;
```

- *Type:* string

Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#auth_provider PolicyPassword#auth_provider}

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery"></a>

```typescript
public readonly callRecovery: string;
```

- *Type:* string

Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#call_recovery PolicyPassword#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#description PolicyPassword#description}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery"></a>

```typescript
public readonly emailRecovery: string;
```

- *Type:* string

Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#email_recovery PolicyPassword#email_recovery}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#groups_included PolicyPassword#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#id PolicyPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes"></a>

```typescript
public readonly passwordAutoUnlockMinutes: number;
```

- *Type:* number

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_auto_unlock_minutes PolicyPassword#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup"></a>

```typescript
public readonly passwordDictionaryLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_dictionary_lookup PolicyPassword#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName"></a>

```typescript
public readonly passwordExcludeFirstName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_exclude_first_name PolicyPassword#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName"></a>

```typescript
public readonly passwordExcludeLastName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_exclude_last_name PolicyPassword#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername"></a>

```typescript
public readonly passwordExcludeUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_exclude_username PolicyPassword#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays"></a>

```typescript
public readonly passwordExpireWarnDays: number;
```

- *Type:* number

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_expire_warn_days PolicyPassword#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount"></a>

```typescript
public readonly passwordHistoryCount: number;
```

- *Type:* number

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_history_count PolicyPassword#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels"></a>

```typescript
public readonly passwordLockoutNotificationChannels: string[];
```

- *Type:* string[]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_lockout_notification_channels PolicyPassword#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays"></a>

```typescript
public readonly passwordMaxAgeDays: number;
```

- *Type:* number

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_max_age_days PolicyPassword#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts"></a>

```typescript
public readonly passwordMaxLockoutAttempts: number;
```

- *Type:* number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_max_lockout_attempts PolicyPassword#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes"></a>

```typescript
public readonly passwordMinAgeMinutes: number;
```

- *Type:* number

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_min_age_minutes PolicyPassword#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength"></a>

```typescript
public readonly passwordMinLength: number;
```

- *Type:* number

Minimum password length. Default: `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_min_length PolicyPassword#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase"></a>

```typescript
public readonly passwordMinLowercase: number;
```

- *Type:* number

If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_min_lowercase PolicyPassword#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber"></a>

```typescript
public readonly passwordMinNumber: number;
```

- *Type:* number

If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_min_number PolicyPassword#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol"></a>

```typescript
public readonly passwordMinSymbol: number;
```

- *Type:* number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_min_symbol PolicyPassword#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase"></a>

```typescript
public readonly passwordMinUppercase: number;
```

- *Type:* number

If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_min_uppercase PolicyPassword#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures"></a>

```typescript
public readonly passwordShowLockoutFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#password_show_lockout_failures PolicyPassword#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#priority PolicyPassword#priority}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength"></a>

```typescript
public readonly questionMinLength: number;
```

- *Type:* number

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#question_min_length PolicyPassword#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery"></a>

```typescript
public readonly questionRecovery: string;
```

- *Type:* string

Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#question_recovery PolicyPassword#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken"></a>

```typescript
public readonly recoveryEmailToken: number;
```

- *Type:* number

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#recovery_email_token PolicyPassword#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock"></a>

```typescript
public readonly skipUnlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#skip_unlock PolicyPassword#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery"></a>

```typescript
public readonly smsRecovery: string;
```

- *Type:* string

Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#sms_recovery PolicyPassword#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/resources/policy_password#status PolicyPassword#status}

---



