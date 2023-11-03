# `okta_policy_password_default`

Refer to the Terraform Registory for docs: [`okta_policy_password_default`](https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default).

# `policyPasswordDefault` Submodule <a name="`policyPasswordDefault` Submodule" id="@cdktf/provider-okta.policyPasswordDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPasswordDefault <a name="PolicyPasswordDefault" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default okta_policy_password_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer"></a>

```typescript
import { policyPasswordDefault } from '@cdktf/provider-okta'

new policyPasswordDefault.PolicyPasswordDefault(scope: Construct, id: string, config?: PolicyPasswordDefaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig">PolicyPasswordDefaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig">PolicyPasswordDefaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery">resetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery">resetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes">resetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup">resetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName">resetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName">resetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername">resetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays">resetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount">resetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels">resetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays">resetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts">resetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes">resetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength">resetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase">resetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber">resetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol">resetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase">resetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures">resetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength">resetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery">resetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken">resetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock">resetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery">resetSmsRecovery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCallRecovery` <a name="resetCallRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetCallRecovery"></a>

```typescript
public resetCallRecovery(): void
```

##### `resetEmailRecovery` <a name="resetEmailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetEmailRecovery"></a>

```typescript
public resetEmailRecovery(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPasswordAutoUnlockMinutes` <a name="resetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordAutoUnlockMinutes"></a>

```typescript
public resetPasswordAutoUnlockMinutes(): void
```

##### `resetPasswordDictionaryLookup` <a name="resetPasswordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordDictionaryLookup"></a>

```typescript
public resetPasswordDictionaryLookup(): void
```

##### `resetPasswordExcludeFirstName` <a name="resetPasswordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeFirstName"></a>

```typescript
public resetPasswordExcludeFirstName(): void
```

##### `resetPasswordExcludeLastName` <a name="resetPasswordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeLastName"></a>

```typescript
public resetPasswordExcludeLastName(): void
```

##### `resetPasswordExcludeUsername` <a name="resetPasswordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExcludeUsername"></a>

```typescript
public resetPasswordExcludeUsername(): void
```

##### `resetPasswordExpireWarnDays` <a name="resetPasswordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordExpireWarnDays"></a>

```typescript
public resetPasswordExpireWarnDays(): void
```

##### `resetPasswordHistoryCount` <a name="resetPasswordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordHistoryCount"></a>

```typescript
public resetPasswordHistoryCount(): void
```

##### `resetPasswordLockoutNotificationChannels` <a name="resetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordLockoutNotificationChannels"></a>

```typescript
public resetPasswordLockoutNotificationChannels(): void
```

##### `resetPasswordMaxAgeDays` <a name="resetPasswordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxAgeDays"></a>

```typescript
public resetPasswordMaxAgeDays(): void
```

##### `resetPasswordMaxLockoutAttempts` <a name="resetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMaxLockoutAttempts"></a>

```typescript
public resetPasswordMaxLockoutAttempts(): void
```

##### `resetPasswordMinAgeMinutes` <a name="resetPasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinAgeMinutes"></a>

```typescript
public resetPasswordMinAgeMinutes(): void
```

##### `resetPasswordMinLength` <a name="resetPasswordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLength"></a>

```typescript
public resetPasswordMinLength(): void
```

##### `resetPasswordMinLowercase` <a name="resetPasswordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinLowercase"></a>

```typescript
public resetPasswordMinLowercase(): void
```

##### `resetPasswordMinNumber` <a name="resetPasswordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinNumber"></a>

```typescript
public resetPasswordMinNumber(): void
```

##### `resetPasswordMinSymbol` <a name="resetPasswordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinSymbol"></a>

```typescript
public resetPasswordMinSymbol(): void
```

##### `resetPasswordMinUppercase` <a name="resetPasswordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordMinUppercase"></a>

```typescript
public resetPasswordMinUppercase(): void
```

##### `resetPasswordShowLockoutFailures` <a name="resetPasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetPasswordShowLockoutFailures"></a>

```typescript
public resetPasswordShowLockoutFailures(): void
```

##### `resetQuestionMinLength` <a name="resetQuestionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionMinLength"></a>

```typescript
public resetQuestionMinLength(): void
```

##### `resetQuestionRecovery` <a name="resetQuestionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetQuestionRecovery"></a>

```typescript
public resetQuestionRecovery(): void
```

##### `resetRecoveryEmailToken` <a name="resetRecoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetRecoveryEmailToken"></a>

```typescript
public resetRecoveryEmailToken(): void
```

##### `resetSkipUnlock` <a name="resetSkipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSkipUnlock"></a>

```typescript
public resetSkipUnlock(): void
```

##### `resetSmsRecovery` <a name="resetSmsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.resetSmsRecovery"></a>

```typescript
public resetSmsRecovery(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct"></a>

```typescript
import { policyPasswordDefault } from '@cdktf/provider-okta'

policyPasswordDefault.PolicyPasswordDefault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement"></a>

```typescript
import { policyPasswordDefault } from '@cdktf/provider-okta'

policyPasswordDefault.PolicyPasswordDefault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource"></a>

```typescript
import { policyPasswordDefault } from '@cdktf/provider-okta'

policyPasswordDefault.PolicyPasswordDefault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport"></a>

```typescript
import { policyPasswordDefault } from '@cdktf/provider-okta'

policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PolicyPasswordDefault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyPasswordDefault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyPasswordDefault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPasswordDefault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider">defaultAuthProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId">defaultIncludedGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput">callRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput">emailRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput">passwordAutoUnlockMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput">passwordDictionaryLookupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput">passwordExcludeFirstNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput">passwordExcludeLastNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput">passwordExcludeUsernameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput">passwordExpireWarnDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput">passwordHistoryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput">passwordLockoutNotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput">passwordMaxAgeDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput">passwordMaxLockoutAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput">passwordMinAgeMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput">passwordMinLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput">passwordMinLowercaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput">passwordMinNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput">passwordMinSymbolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput">passwordMinUppercaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput">passwordShowLockoutFailuresInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput">questionMinLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput">questionRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput">recoveryEmailTokenInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput">skipUnlockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput">smsRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery">callRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery">emailRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength">passwordMinLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber">passwordMinNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength">questionMinLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery">questionRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock">skipUnlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery">smsRecovery</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAuthProvider`<sup>Required</sup> <a name="defaultAuthProvider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultAuthProvider"></a>

```typescript
public readonly defaultAuthProvider: string;
```

- *Type:* string

---

##### `defaultIncludedGroupId`<sup>Required</sup> <a name="defaultIncludedGroupId" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.defaultIncludedGroupId"></a>

```typescript
public readonly defaultIncludedGroupId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `callRecoveryInput`<sup>Optional</sup> <a name="callRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecoveryInput"></a>

```typescript
public readonly callRecoveryInput: string;
```

- *Type:* string

---

##### `emailRecoveryInput`<sup>Optional</sup> <a name="emailRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecoveryInput"></a>

```typescript
public readonly emailRecoveryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="passwordAutoUnlockMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutesInput"></a>

```typescript
public readonly passwordAutoUnlockMinutesInput: number;
```

- *Type:* number

---

##### `passwordDictionaryLookupInput`<sup>Optional</sup> <a name="passwordDictionaryLookupInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookupInput"></a>

```typescript
public readonly passwordDictionaryLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeFirstNameInput`<sup>Optional</sup> <a name="passwordExcludeFirstNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstNameInput"></a>

```typescript
public readonly passwordExcludeFirstNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeLastNameInput`<sup>Optional</sup> <a name="passwordExcludeLastNameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastNameInput"></a>

```typescript
public readonly passwordExcludeLastNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeUsernameInput`<sup>Optional</sup> <a name="passwordExcludeUsernameInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsernameInput"></a>

```typescript
public readonly passwordExcludeUsernameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExpireWarnDaysInput`<sup>Optional</sup> <a name="passwordExpireWarnDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDaysInput"></a>

```typescript
public readonly passwordExpireWarnDaysInput: number;
```

- *Type:* number

---

##### `passwordHistoryCountInput`<sup>Optional</sup> <a name="passwordHistoryCountInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCountInput"></a>

```typescript
public readonly passwordHistoryCountInput: number;
```

- *Type:* number

---

##### `passwordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="passwordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannelsInput"></a>

```typescript
public readonly passwordLockoutNotificationChannelsInput: string[];
```

- *Type:* string[]

---

##### `passwordMaxAgeDaysInput`<sup>Optional</sup> <a name="passwordMaxAgeDaysInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDaysInput"></a>

```typescript
public readonly passwordMaxAgeDaysInput: number;
```

- *Type:* number

---

##### `passwordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="passwordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttemptsInput"></a>

```typescript
public readonly passwordMaxLockoutAttemptsInput: number;
```

- *Type:* number

---

##### `passwordMinAgeMinutesInput`<sup>Optional</sup> <a name="passwordMinAgeMinutesInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutesInput"></a>

```typescript
public readonly passwordMinAgeMinutesInput: number;
```

- *Type:* number

---

##### `passwordMinLengthInput`<sup>Optional</sup> <a name="passwordMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLengthInput"></a>

```typescript
public readonly passwordMinLengthInput: number;
```

- *Type:* number

---

##### `passwordMinLowercaseInput`<sup>Optional</sup> <a name="passwordMinLowercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercaseInput"></a>

```typescript
public readonly passwordMinLowercaseInput: number;
```

- *Type:* number

---

##### `passwordMinNumberInput`<sup>Optional</sup> <a name="passwordMinNumberInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumberInput"></a>

```typescript
public readonly passwordMinNumberInput: number;
```

- *Type:* number

---

##### `passwordMinSymbolInput`<sup>Optional</sup> <a name="passwordMinSymbolInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbolInput"></a>

```typescript
public readonly passwordMinSymbolInput: number;
```

- *Type:* number

---

##### `passwordMinUppercaseInput`<sup>Optional</sup> <a name="passwordMinUppercaseInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercaseInput"></a>

```typescript
public readonly passwordMinUppercaseInput: number;
```

- *Type:* number

---

##### `passwordShowLockoutFailuresInput`<sup>Optional</sup> <a name="passwordShowLockoutFailuresInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailuresInput"></a>

```typescript
public readonly passwordShowLockoutFailuresInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `questionMinLengthInput`<sup>Optional</sup> <a name="questionMinLengthInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLengthInput"></a>

```typescript
public readonly questionMinLengthInput: number;
```

- *Type:* number

---

##### `questionRecoveryInput`<sup>Optional</sup> <a name="questionRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecoveryInput"></a>

```typescript
public readonly questionRecoveryInput: string;
```

- *Type:* string

---

##### `recoveryEmailTokenInput`<sup>Optional</sup> <a name="recoveryEmailTokenInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailTokenInput"></a>

```typescript
public readonly recoveryEmailTokenInput: number;
```

- *Type:* number

---

##### `skipUnlockInput`<sup>Optional</sup> <a name="skipUnlockInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlockInput"></a>

```typescript
public readonly skipUnlockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smsRecoveryInput`<sup>Optional</sup> <a name="smsRecoveryInput" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecoveryInput"></a>

```typescript
public readonly smsRecoveryInput: string;
```

- *Type:* string

---

##### `callRecovery`<sup>Required</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.callRecovery"></a>

```typescript
public readonly callRecovery: string;
```

- *Type:* string

---

##### `emailRecovery`<sup>Required</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.emailRecovery"></a>

```typescript
public readonly emailRecovery: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `passwordAutoUnlockMinutes`<sup>Required</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordAutoUnlockMinutes"></a>

```typescript
public readonly passwordAutoUnlockMinutes: number;
```

- *Type:* number

---

##### `passwordDictionaryLookup`<sup>Required</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordDictionaryLookup"></a>

```typescript
public readonly passwordDictionaryLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeFirstName`<sup>Required</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeFirstName"></a>

```typescript
public readonly passwordExcludeFirstName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeLastName`<sup>Required</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeLastName"></a>

```typescript
public readonly passwordExcludeLastName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExcludeUsername`<sup>Required</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExcludeUsername"></a>

```typescript
public readonly passwordExcludeUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordExpireWarnDays`<sup>Required</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordExpireWarnDays"></a>

```typescript
public readonly passwordExpireWarnDays: number;
```

- *Type:* number

---

##### `passwordHistoryCount`<sup>Required</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordHistoryCount"></a>

```typescript
public readonly passwordHistoryCount: number;
```

- *Type:* number

---

##### `passwordLockoutNotificationChannels`<sup>Required</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordLockoutNotificationChannels"></a>

```typescript
public readonly passwordLockoutNotificationChannels: string[];
```

- *Type:* string[]

---

##### `passwordMaxAgeDays`<sup>Required</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxAgeDays"></a>

```typescript
public readonly passwordMaxAgeDays: number;
```

- *Type:* number

---

##### `passwordMaxLockoutAttempts`<sup>Required</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMaxLockoutAttempts"></a>

```typescript
public readonly passwordMaxLockoutAttempts: number;
```

- *Type:* number

---

##### `passwordMinAgeMinutes`<sup>Required</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinAgeMinutes"></a>

```typescript
public readonly passwordMinAgeMinutes: number;
```

- *Type:* number

---

##### `passwordMinLength`<sup>Required</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLength"></a>

```typescript
public readonly passwordMinLength: number;
```

- *Type:* number

---

##### `passwordMinLowercase`<sup>Required</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinLowercase"></a>

```typescript
public readonly passwordMinLowercase: number;
```

- *Type:* number

---

##### `passwordMinNumber`<sup>Required</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinNumber"></a>

```typescript
public readonly passwordMinNumber: number;
```

- *Type:* number

---

##### `passwordMinSymbol`<sup>Required</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinSymbol"></a>

```typescript
public readonly passwordMinSymbol: number;
```

- *Type:* number

---

##### `passwordMinUppercase`<sup>Required</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordMinUppercase"></a>

```typescript
public readonly passwordMinUppercase: number;
```

- *Type:* number

---

##### `passwordShowLockoutFailures`<sup>Required</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.passwordShowLockoutFailures"></a>

```typescript
public readonly passwordShowLockoutFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `questionMinLength`<sup>Required</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionMinLength"></a>

```typescript
public readonly questionMinLength: number;
```

- *Type:* number

---

##### `questionRecovery`<sup>Required</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.questionRecovery"></a>

```typescript
public readonly questionRecovery: string;
```

- *Type:* string

---

##### `recoveryEmailToken`<sup>Required</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.recoveryEmailToken"></a>

```typescript
public readonly recoveryEmailToken: number;
```

- *Type:* number

---

##### `skipUnlock`<sup>Required</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.skipUnlock"></a>

```typescript
public readonly skipUnlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `smsRecovery`<sup>Required</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.smsRecovery"></a>

```typescript
public readonly smsRecovery: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordDefaultConfig <a name="PolicyPasswordDefaultConfig" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.Initializer"></a>

```typescript
import { policyPasswordDefault } from '@cdktf/provider-okta'

const policyPasswordDefaultConfig: policyPasswordDefault.PolicyPasswordDefaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery">callRecovery</a></code> | <code>string</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery">emailRecovery</a></code> | <code>string</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#id PolicyPasswordDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>boolean \| cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>boolean \| cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>number</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>string[]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>number</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>number</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength">passwordMinLength</a></code> | <code>number</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber">passwordMinNumber</a></code> | <code>number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>boolean \| cdktf.IResolvable</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength">questionMinLength</a></code> | <code>number</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery">questionRecovery</a></code> | <code>string</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>number</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock">skipUnlock</a></code> | <code>boolean \| cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery">smsRecovery</a></code> | <code>string</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.callRecovery"></a>

```typescript
public readonly callRecovery: string;
```

- *Type:* string

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#call_recovery PolicyPasswordDefault#call_recovery}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.emailRecovery"></a>

```typescript
public readonly emailRecovery: string;
```

- *Type:* string

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#email_recovery PolicyPasswordDefault#email_recovery}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#id PolicyPasswordDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordAutoUnlockMinutes"></a>

```typescript
public readonly passwordAutoUnlockMinutes: number;
```

- *Type:* number

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_auto_unlock_minutes PolicyPasswordDefault#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordDictionaryLookup"></a>

```typescript
public readonly passwordDictionaryLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_dictionary_lookup PolicyPasswordDefault#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeFirstName"></a>

```typescript
public readonly passwordExcludeFirstName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_exclude_first_name PolicyPasswordDefault#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeLastName"></a>

```typescript
public readonly passwordExcludeLastName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_exclude_last_name PolicyPasswordDefault#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExcludeUsername"></a>

```typescript
public readonly passwordExcludeUsername: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_exclude_username PolicyPasswordDefault#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordExpireWarnDays"></a>

```typescript
public readonly passwordExpireWarnDays: number;
```

- *Type:* number

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_expire_warn_days PolicyPasswordDefault#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordHistoryCount"></a>

```typescript
public readonly passwordHistoryCount: number;
```

- *Type:* number

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_history_count PolicyPasswordDefault#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordLockoutNotificationChannels"></a>

```typescript
public readonly passwordLockoutNotificationChannels: string[];
```

- *Type:* string[]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_lockout_notification_channels PolicyPasswordDefault#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxAgeDays"></a>

```typescript
public readonly passwordMaxAgeDays: number;
```

- *Type:* number

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_max_age_days PolicyPasswordDefault#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMaxLockoutAttempts"></a>

```typescript
public readonly passwordMaxLockoutAttempts: number;
```

- *Type:* number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_max_lockout_attempts PolicyPasswordDefault#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinAgeMinutes"></a>

```typescript
public readonly passwordMinAgeMinutes: number;
```

- *Type:* number

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_min_age_minutes PolicyPasswordDefault#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLength"></a>

```typescript
public readonly passwordMinLength: number;
```

- *Type:* number

Minimum password length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_min_length PolicyPasswordDefault#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinLowercase"></a>

```typescript
public readonly passwordMinLowercase: number;
```

- *Type:* number

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_min_lowercase PolicyPasswordDefault#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinNumber"></a>

```typescript
public readonly passwordMinNumber: number;
```

- *Type:* number

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_min_number PolicyPasswordDefault#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinSymbol"></a>

```typescript
public readonly passwordMinSymbol: number;
```

- *Type:* number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_min_symbol PolicyPasswordDefault#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordMinUppercase"></a>

```typescript
public readonly passwordMinUppercase: number;
```

- *Type:* number

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_min_uppercase PolicyPasswordDefault#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.passwordShowLockoutFailures"></a>

```typescript
public readonly passwordShowLockoutFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#password_show_lockout_failures PolicyPasswordDefault#password_show_lockout_failures}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionMinLength"></a>

```typescript
public readonly questionMinLength: number;
```

- *Type:* number

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#question_min_length PolicyPasswordDefault#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.questionRecovery"></a>

```typescript
public readonly questionRecovery: string;
```

- *Type:* string

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#question_recovery PolicyPasswordDefault#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.recoveryEmailToken"></a>

```typescript
public readonly recoveryEmailToken: number;
```

- *Type:* number

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#recovery_email_token PolicyPasswordDefault#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.skipUnlock"></a>

```typescript
public readonly skipUnlock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#skip_unlock PolicyPasswordDefault#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPasswordDefault.PolicyPasswordDefaultConfig.property.smsRecovery"></a>

```typescript
public readonly smsRecovery: string;
```

- *Type:* string

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/policy_password_default#sms_recovery PolicyPasswordDefault#sms_recovery}

---



