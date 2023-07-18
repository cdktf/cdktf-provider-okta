# `okta_user`

Refer to the Terraform Registory for docs: [`okta_user`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-okta.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-okta.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-okta'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.putPasswordHash">putPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCostCenter">resetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributes">resetCustomProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore">resetCustomProfileAttributesToIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDivision">resetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetEmployeeNumber">resetEmployeeNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate">resetExpirePasswordOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificPrefix">resetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificSuffix">resetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManager">resetManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManagerId">resetManagerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMobilePhone">resetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetNickName">resetNickName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOldPassword">resetOldPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordHash">resetPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordInlineHook">resetPasswordInlineHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPostalAddress">resetPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPrimaryPhone">resetPrimaryPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetProfileUrl">resetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryAnswer">resetRecoveryAnswer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryQuestion">resetRecoveryQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSecondEmail">resetSecondEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSkipRoles">resetSkipRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetUserType">resetUserType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPasswordHash` <a name="putPasswordHash" id="@cdktf/provider-okta.user.User.putPasswordHash"></a>

```typescript
public putPasswordHash(value: UserPasswordHash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `resetCity` <a name="resetCity" id="@cdktf/provider-okta.user.User.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCostCenter` <a name="resetCostCenter" id="@cdktf/provider-okta.user.User.resetCostCenter"></a>

```typescript
public resetCostCenter(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-okta.user.User.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetCustomProfileAttributes` <a name="resetCustomProfileAttributes" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributes"></a>

```typescript
public resetCustomProfileAttributes(): void
```

##### `resetCustomProfileAttributesToIgnore` <a name="resetCustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore"></a>

```typescript
public resetCustomProfileAttributesToIgnore(): void
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-okta.user.User.resetDepartment"></a>

```typescript
public resetDepartment(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-okta.user.User.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDivision` <a name="resetDivision" id="@cdktf/provider-okta.user.User.resetDivision"></a>

```typescript
public resetDivision(): void
```

##### `resetEmployeeNumber` <a name="resetEmployeeNumber" id="@cdktf/provider-okta.user.User.resetEmployeeNumber"></a>

```typescript
public resetEmployeeNumber(): void
```

##### `resetExpirePasswordOnCreate` <a name="resetExpirePasswordOnCreate" id="@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate"></a>

```typescript
public resetExpirePasswordOnCreate(): void
```

##### `resetHonorificPrefix` <a name="resetHonorificPrefix" id="@cdktf/provider-okta.user.User.resetHonorificPrefix"></a>

```typescript
public resetHonorificPrefix(): void
```

##### `resetHonorificSuffix` <a name="resetHonorificSuffix" id="@cdktf/provider-okta.user.User.resetHonorificSuffix"></a>

```typescript
public resetHonorificSuffix(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.user.User.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-okta.user.User.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetManager` <a name="resetManager" id="@cdktf/provider-okta.user.User.resetManager"></a>

```typescript
public resetManager(): void
```

##### `resetManagerId` <a name="resetManagerId" id="@cdktf/provider-okta.user.User.resetManagerId"></a>

```typescript
public resetManagerId(): void
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktf/provider-okta.user.User.resetMiddleName"></a>

```typescript
public resetMiddleName(): void
```

##### `resetMobilePhone` <a name="resetMobilePhone" id="@cdktf/provider-okta.user.User.resetMobilePhone"></a>

```typescript
public resetMobilePhone(): void
```

##### `resetNickName` <a name="resetNickName" id="@cdktf/provider-okta.user.User.resetNickName"></a>

```typescript
public resetNickName(): void
```

##### `resetOldPassword` <a name="resetOldPassword" id="@cdktf/provider-okta.user.User.resetOldPassword"></a>

```typescript
public resetOldPassword(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-okta.user.User.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.user.User.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordHash` <a name="resetPasswordHash" id="@cdktf/provider-okta.user.User.resetPasswordHash"></a>

```typescript
public resetPasswordHash(): void
```

##### `resetPasswordInlineHook` <a name="resetPasswordInlineHook" id="@cdktf/provider-okta.user.User.resetPasswordInlineHook"></a>

```typescript
public resetPasswordInlineHook(): void
```

##### `resetPostalAddress` <a name="resetPostalAddress" id="@cdktf/provider-okta.user.User.resetPostalAddress"></a>

```typescript
public resetPostalAddress(): void
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktf/provider-okta.user.User.resetPreferredLanguage"></a>

```typescript
public resetPreferredLanguage(): void
```

##### `resetPrimaryPhone` <a name="resetPrimaryPhone" id="@cdktf/provider-okta.user.User.resetPrimaryPhone"></a>

```typescript
public resetPrimaryPhone(): void
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="@cdktf/provider-okta.user.User.resetProfileUrl"></a>

```typescript
public resetProfileUrl(): void
```

##### `resetRecoveryAnswer` <a name="resetRecoveryAnswer" id="@cdktf/provider-okta.user.User.resetRecoveryAnswer"></a>

```typescript
public resetRecoveryAnswer(): void
```

##### `resetRecoveryQuestion` <a name="resetRecoveryQuestion" id="@cdktf/provider-okta.user.User.resetRecoveryQuestion"></a>

```typescript
public resetRecoveryQuestion(): void
```

##### `resetSecondEmail` <a name="resetSecondEmail" id="@cdktf/provider-okta.user.User.resetSecondEmail"></a>

```typescript
public resetSecondEmail(): void
```

##### `resetSkipRoles` <a name="resetSkipRoles" id="@cdktf/provider-okta.user.User.resetSkipRoles"></a>

```typescript
public resetSkipRoles(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-okta.user.User.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.user.User.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-okta.user.User.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-okta.user.User.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-okta.user.User.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.user.User.resetUserType"></a>

```typescript
public resetUserType(): void
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-okta.user.User.resetZipCode"></a>

```typescript
public resetZipCode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-okta'

user.User.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-okta'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-okta'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHash">passwordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.rawStatus">rawStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenterInput">costCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesInput">customProfileAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput">customProfileAttributesToIgnoreInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.departmentInput">departmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.divisionInput">divisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumberInput">employeeNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput">expirePasswordOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefixInput">honorificPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffixInput">honorificSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerIdInput">managerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerInput">managerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleNameInput">middleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhoneInput">mobilePhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickNameInput">nickNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPasswordInput">oldPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHashInput">passwordHashInput</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHookInput">passwordInlineHookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddressInput">postalAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhoneInput">primaryPhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrlInput">profileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswerInput">recoveryAnswerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestionInput">recoveryQuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmailInput">secondEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRolesInput">skipRolesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCodeInput">zipCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenter">costCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributes">customProfileAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore">customProfileAttributesToIgnore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreate">expirePasswordOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.manager">manager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerId">managerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickName">nickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPassword">oldPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHook">passwordInlineHook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddress">postalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhone">primaryPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswer">recoveryAnswer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestion">recoveryQuestion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmail">secondEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRoles">skipRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCode">zipCode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.User.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `passwordHash`<sup>Required</sup> <a name="passwordHash" id="@cdktf/provider-okta.user.User.property.passwordHash"></a>

```typescript
public readonly passwordHash: UserPasswordHashOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a>

---

##### `rawStatus`<sup>Required</sup> <a name="rawStatus" id="@cdktf/provider-okta.user.User.property.rawStatus"></a>

```typescript
public readonly rawStatus: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-okta.user.User.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `costCenterInput`<sup>Optional</sup> <a name="costCenterInput" id="@cdktf/provider-okta.user.User.property.costCenterInput"></a>

```typescript
public readonly costCenterInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-okta.user.User.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `customProfileAttributesInput`<sup>Optional</sup> <a name="customProfileAttributesInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesInput"></a>

```typescript
public readonly customProfileAttributesInput: string;
```

- *Type:* string

---

##### `customProfileAttributesToIgnoreInput`<sup>Optional</sup> <a name="customProfileAttributesToIgnoreInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput"></a>

```typescript
public readonly customProfileAttributesToIgnoreInput: string[];
```

- *Type:* string[]

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-okta.user.User.property.departmentInput"></a>

```typescript
public readonly departmentInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-okta.user.User.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `divisionInput`<sup>Optional</sup> <a name="divisionInput" id="@cdktf/provider-okta.user.User.property.divisionInput"></a>

```typescript
public readonly divisionInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-okta.user.User.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `employeeNumberInput`<sup>Optional</sup> <a name="employeeNumberInput" id="@cdktf/provider-okta.user.User.property.employeeNumberInput"></a>

```typescript
public readonly employeeNumberInput: string;
```

- *Type:* string

---

##### `expirePasswordOnCreateInput`<sup>Optional</sup> <a name="expirePasswordOnCreateInput" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput"></a>

```typescript
public readonly expirePasswordOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-okta.user.User.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `honorificPrefixInput`<sup>Optional</sup> <a name="honorificPrefixInput" id="@cdktf/provider-okta.user.User.property.honorificPrefixInput"></a>

```typescript
public readonly honorificPrefixInput: string;
```

- *Type:* string

---

##### `honorificSuffixInput`<sup>Optional</sup> <a name="honorificSuffixInput" id="@cdktf/provider-okta.user.User.property.honorificSuffixInput"></a>

```typescript
public readonly honorificSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.user.User.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-okta.user.User.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-okta.user.User.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-okta.user.User.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `managerIdInput`<sup>Optional</sup> <a name="managerIdInput" id="@cdktf/provider-okta.user.User.property.managerIdInput"></a>

```typescript
public readonly managerIdInput: string;
```

- *Type:* string

---

##### `managerInput`<sup>Optional</sup> <a name="managerInput" id="@cdktf/provider-okta.user.User.property.managerInput"></a>

```typescript
public readonly managerInput: string;
```

- *Type:* string

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktf/provider-okta.user.User.property.middleNameInput"></a>

```typescript
public readonly middleNameInput: string;
```

- *Type:* string

---

##### `mobilePhoneInput`<sup>Optional</sup> <a name="mobilePhoneInput" id="@cdktf/provider-okta.user.User.property.mobilePhoneInput"></a>

```typescript
public readonly mobilePhoneInput: string;
```

- *Type:* string

---

##### `nickNameInput`<sup>Optional</sup> <a name="nickNameInput" id="@cdktf/provider-okta.user.User.property.nickNameInput"></a>

```typescript
public readonly nickNameInput: string;
```

- *Type:* string

---

##### `oldPasswordInput`<sup>Optional</sup> <a name="oldPasswordInput" id="@cdktf/provider-okta.user.User.property.oldPasswordInput"></a>

```typescript
public readonly oldPasswordInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-okta.user.User.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `passwordHashInput`<sup>Optional</sup> <a name="passwordHashInput" id="@cdktf/provider-okta.user.User.property.passwordHashInput"></a>

```typescript
public readonly passwordHashInput: UserPasswordHash;
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `passwordInlineHookInput`<sup>Optional</sup> <a name="passwordInlineHookInput" id="@cdktf/provider-okta.user.User.property.passwordInlineHookInput"></a>

```typescript
public readonly passwordInlineHookInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.user.User.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-okta.user.User.property.postalAddressInput"></a>

```typescript
public readonly postalAddressInput: string;
```

- *Type:* string

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktf/provider-okta.user.User.property.preferredLanguageInput"></a>

```typescript
public readonly preferredLanguageInput: string;
```

- *Type:* string

---

##### `primaryPhoneInput`<sup>Optional</sup> <a name="primaryPhoneInput" id="@cdktf/provider-okta.user.User.property.primaryPhoneInput"></a>

```typescript
public readonly primaryPhoneInput: string;
```

- *Type:* string

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="@cdktf/provider-okta.user.User.property.profileUrlInput"></a>

```typescript
public readonly profileUrlInput: string;
```

- *Type:* string

---

##### `recoveryAnswerInput`<sup>Optional</sup> <a name="recoveryAnswerInput" id="@cdktf/provider-okta.user.User.property.recoveryAnswerInput"></a>

```typescript
public readonly recoveryAnswerInput: string;
```

- *Type:* string

---

##### `recoveryQuestionInput`<sup>Optional</sup> <a name="recoveryQuestionInput" id="@cdktf/provider-okta.user.User.property.recoveryQuestionInput"></a>

```typescript
public readonly recoveryQuestionInput: string;
```

- *Type:* string

---

##### `secondEmailInput`<sup>Optional</sup> <a name="secondEmailInput" id="@cdktf/provider-okta.user.User.property.secondEmailInput"></a>

```typescript
public readonly secondEmailInput: string;
```

- *Type:* string

---

##### `skipRolesInput`<sup>Optional</sup> <a name="skipRolesInput" id="@cdktf/provider-okta.user.User.property.skipRolesInput"></a>

```typescript
public readonly skipRolesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-okta.user.User.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.user.User.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-okta.user.User.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-okta.user.User.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.user.User.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.user.User.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-okta.user.User.property.zipCodeInput"></a>

```typescript
public readonly zipCodeInput: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.user.User.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-okta.user.User.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-okta.user.User.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `customProfileAttributes`<sup>Required</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.user.User.property.customProfileAttributes"></a>

```typescript
public readonly customProfileAttributes: string;
```

- *Type:* string

---

##### `customProfileAttributesToIgnore`<sup>Required</sup> <a name="customProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore"></a>

```typescript
public readonly customProfileAttributesToIgnore: string[];
```

- *Type:* string[]

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.user.User.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-okta.user.User.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.user.User.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.User.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-okta.user.User.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

---

##### `expirePasswordOnCreate`<sup>Required</sup> <a name="expirePasswordOnCreate" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreate"></a>

```typescript
public readonly expirePasswordOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.user.User.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.user.User.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.user.User.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.user.User.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.user.User.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.User.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.user.User.property.manager"></a>

```typescript
public readonly manager: string;
```

- *Type:* string

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-okta.user.User.property.managerId"></a>

```typescript
public readonly managerId: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-okta.user.User.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-okta.user.User.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktf/provider-okta.user.User.property.nickName"></a>

```typescript
public readonly nickName: string;
```

- *Type:* string

---

##### `oldPassword`<sup>Required</sup> <a name="oldPassword" id="@cdktf/provider-okta.user.User.property.oldPassword"></a>

```typescript
public readonly oldPassword: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.user.User.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.user.User.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordInlineHook`<sup>Required</sup> <a name="passwordInlineHook" id="@cdktf/provider-okta.user.User.property.passwordInlineHook"></a>

```typescript
public readonly passwordInlineHook: string;
```

- *Type:* string

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-okta.user.User.property.postalAddress"></a>

```typescript
public readonly postalAddress: string;
```

- *Type:* string

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.user.User.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `primaryPhone`<sup>Required</sup> <a name="primaryPhone" id="@cdktf/provider-okta.user.User.property.primaryPhone"></a>

```typescript
public readonly primaryPhone: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-okta.user.User.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `recoveryAnswer`<sup>Required</sup> <a name="recoveryAnswer" id="@cdktf/provider-okta.user.User.property.recoveryAnswer"></a>

```typescript
public readonly recoveryAnswer: string;
```

- *Type:* string

---

##### `recoveryQuestion`<sup>Required</sup> <a name="recoveryQuestion" id="@cdktf/provider-okta.user.User.property.recoveryQuestion"></a>

```typescript
public readonly recoveryQuestion: string;
```

- *Type:* string

---

##### `secondEmail`<sup>Required</sup> <a name="secondEmail" id="@cdktf/provider-okta.user.User.property.secondEmail"></a>

```typescript
public readonly secondEmail: string;
```

- *Type:* string

---

##### `skipRoles`<sup>Required</sup> <a name="skipRoles" id="@cdktf/provider-okta.user.User.property.skipRoles"></a>

```typescript
public readonly skipRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.user.User.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.user.User.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-okta.user.User.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.user.User.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.user.User.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.user.User.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-okta.user.User.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-okta.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-okta'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.email">email</a></code> | <code>string</code> | User primary email address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.firstName">firstName</a></code> | <code>string</code> | User first name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lastName">lastName</a></code> | <code>string</code> | User last name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.login">login</a></code> | <code>string</code> | User Okta login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.city">city</a></code> | <code>string</code> | User city. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.costCenter">costCenter</a></code> | <code>string</code> | User cost center. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.countryCode">countryCode</a></code> | <code>string</code> | User country code. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes">customProfileAttributes</a></code> | <code>string</code> | JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore">customProfileAttributesToIgnore</a></code> | <code>string[]</code> | List of custom_profile_attribute keys that should be excluded from being managed by Terraform. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.department">department</a></code> | <code>string</code> | User department. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.displayName">displayName</a></code> | <code>string</code> | User display name, suitable to show end users. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.division">division</a></code> | <code>string</code> | User division. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | User employee number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate">expirePasswordOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the user will have to change the password at the next login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | User honorific prefix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | User honorific suffix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.locale">locale</a></code> | <code>string</code> | User default location. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.manager">manager</a></code> | <code>string</code> | Manager of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.managerId">managerId</a></code> | <code>string</code> | Manager ID of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.middleName">middleName</a></code> | <code>string</code> | User middle name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | User mobile phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.nickName">nickName</a></code> | <code>string</code> | User nickname. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.oldPassword">oldPassword</a></code> | <code>string</code> | Old User Password. Should be only set in case the password was not changed using the provider. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.organization">organization</a></code> | <code>string</code> | User organization. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.password">password</a></code> | <code>string</code> | User Password. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordHash">passwordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | password_hash block. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook">passwordInlineHook</a></code> | <code>string</code> | When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.postalAddress">postalAddress</a></code> | <code>string</code> | User mailing address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | User preferred language. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.primaryPhone">primaryPhone</a></code> | <code>string</code> | User primary phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.profileUrl">profileUrl</a></code> | <code>string</code> | User online profile (web page). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer">recoveryAnswer</a></code> | <code>string</code> | User Password Recovery Answer. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion">recoveryQuestion</a></code> | <code>string</code> | User Password Recovery Question. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.secondEmail">secondEmail</a></code> | <code>string</code> | User secondary email address, used for account recovery. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.skipRoles">skipRoles</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.state">state</a></code> | <code>string</code> | User state or region. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.status">status</a></code> | <code>string</code> | The status of the User in Okta - remove to set user back to active/provisioned. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.streetAddress">streetAddress</a></code> | <code>string</code> | User street address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.timezone">timezone</a></code> | <code>string</code> | User default timezone. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.title">title</a></code> | <code>string</code> | User title. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.userType">userType</a></code> | <code>string</code> | User employee type. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.zipCode">zipCode</a></code> | <code>string</code> | User zipcode or postal code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.UserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.UserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

User primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#email User#email}

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.user.UserConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

User first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#first_name User#first_name}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.user.UserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

User last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#last_name User#last_name}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.UserConfig.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

User Okta login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#login User#login}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.user.UserConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

User city.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#city User#city}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-okta.user.UserConfig.property.costCenter"></a>

```typescript
public readonly costCenter: string;
```

- *Type:* string

User cost center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#cost_center User#cost_center}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-okta.user.UserConfig.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

User country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#country_code User#country_code}

---

##### `customProfileAttributes`<sup>Optional</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes"></a>

```typescript
public readonly customProfileAttributes: string;
```

- *Type:* string

JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}

---

##### `customProfileAttributesToIgnore`<sup>Optional</sup> <a name="customProfileAttributesToIgnore" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore"></a>

```typescript
public readonly customProfileAttributesToIgnore: string[];
```

- *Type:* string[]

List of custom_profile_attribute keys that should be excluded from being managed by Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-okta.user.UserConfig.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

User department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#department User#department}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-okta.user.UserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User display name, suitable to show end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#display_name User#display_name}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-okta.user.UserConfig.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

User division.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#division User#division}

---

##### `employeeNumber`<sup>Optional</sup> <a name="employeeNumber" id="@cdktf/provider-okta.user.UserConfig.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

User employee number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#employee_number User#employee_number}

---

##### `expirePasswordOnCreate`<sup>Optional</sup> <a name="expirePasswordOnCreate" id="@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate"></a>

```typescript
public readonly expirePasswordOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the user will have to change the password at the next login.

This property will be used when user is being created and works only when `password` field is set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#expire_password_on_create User#expire_password_on_create}

---

##### `honorificPrefix`<sup>Optional</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.user.UserConfig.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

User honorific prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#honorific_prefix User#honorific_prefix}

---

##### `honorificSuffix`<sup>Optional</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.user.UserConfig.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

User honorific suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#honorific_suffix User#honorific_suffix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.user.UserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.user.UserConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

User default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#locale User#locale}

---

##### `manager`<sup>Optional</sup> <a name="manager" id="@cdktf/provider-okta.user.UserConfig.property.manager"></a>

```typescript
public readonly manager: string;
```

- *Type:* string

Manager of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#manager User#manager}

---

##### `managerId`<sup>Optional</sup> <a name="managerId" id="@cdktf/provider-okta.user.UserConfig.property.managerId"></a>

```typescript
public readonly managerId: string;
```

- *Type:* string

Manager ID of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#manager_id User#manager_id}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-okta.user.UserConfig.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

User middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#middle_name User#middle_name}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-okta.user.UserConfig.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

User mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `nickName`<sup>Optional</sup> <a name="nickName" id="@cdktf/provider-okta.user.UserConfig.property.nickName"></a>

```typescript
public readonly nickName: string;
```

- *Type:* string

User nickname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#nick_name User#nick_name}

---

##### `oldPassword`<sup>Optional</sup> <a name="oldPassword" id="@cdktf/provider-okta.user.UserConfig.property.oldPassword"></a>

```typescript
public readonly oldPassword: string;
```

- *Type:* string

Old User Password. Should be only set in case the password was not changed using the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#old_password User#old_password}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-okta.user.UserConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

User organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#organization User#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.user.UserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

User Password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#password User#password}

---

##### `passwordHash`<sup>Optional</sup> <a name="passwordHash" id="@cdktf/provider-okta.user.UserConfig.property.passwordHash"></a>

```typescript
public readonly passwordHash: UserPasswordHash;
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

password_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#password_hash User#password_hash}

---

##### `passwordInlineHook`<sup>Optional</sup> <a name="passwordInlineHook" id="@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook"></a>

```typescript
public readonly passwordInlineHook: string;
```

- *Type:* string

When specified, the Password Inline Hook is triggered to handle verification of the end user's password the first time the user tries to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#password_inline_hook User#password_inline_hook}

---

##### `postalAddress`<sup>Optional</sup> <a name="postalAddress" id="@cdktf/provider-okta.user.UserConfig.property.postalAddress"></a>

```typescript
public readonly postalAddress: string;
```

- *Type:* string

User mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#postal_address User#postal_address}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.user.UserConfig.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

User preferred language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `primaryPhone`<sup>Optional</sup> <a name="primaryPhone" id="@cdktf/provider-okta.user.UserConfig.property.primaryPhone"></a>

```typescript
public readonly primaryPhone: string;
```

- *Type:* string

User primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#primary_phone User#primary_phone}

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktf/provider-okta.user.UserConfig.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

User online profile (web page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#profile_url User#profile_url}

---

##### `recoveryAnswer`<sup>Optional</sup> <a name="recoveryAnswer" id="@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer"></a>

```typescript
public readonly recoveryAnswer: string;
```

- *Type:* string

User Password Recovery Answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#recovery_answer User#recovery_answer}

---

##### `recoveryQuestion`<sup>Optional</sup> <a name="recoveryQuestion" id="@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion"></a>

```typescript
public readonly recoveryQuestion: string;
```

- *Type:* string

User Password Recovery Question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#recovery_question User#recovery_question}

---

##### `secondEmail`<sup>Optional</sup> <a name="secondEmail" id="@cdktf/provider-okta.user.UserConfig.property.secondEmail"></a>

```typescript
public readonly secondEmail: string;
```

- *Type:* string

User secondary email address, used for account recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#second_email User#second_email}

---

##### `skipRoles`<sup>Optional</sup> <a name="skipRoles" id="@cdktf/provider-okta.user.UserConfig.property.skipRoles"></a>

```typescript
public readonly skipRoles: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#skip_roles User#skip_roles}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.user.UserConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

User state or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#state User#state}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.user.UserConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the User in Okta - remove to set user back to active/provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#status User#status}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-okta.user.UserConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

User street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#street_address User#street_address}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-okta.user.UserConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

User default timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#timezone User#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-okta.user.UserConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

User title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#title User#title}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.user.UserConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

User employee type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#user_type User#user_type}

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-okta.user.UserConfig.property.zipCode"></a>

```typescript
public readonly zipCode: string;
```

- *Type:* string

User zipcode or postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#zip_code User#zip_code}

---

### UserPasswordHash <a name="UserPasswordHash" id="@cdktf/provider-okta.user.UserPasswordHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserPasswordHash.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-okta'

const userPasswordHash: user.UserPasswordHash = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.algorithm">algorithm</a></code> | <code>string</code> | The algorithm used to generate the hash using the password. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.value">value</a></code> | <code>string</code> | For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used). |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.salt">salt</a></code> | <code>string</code> | Only required for salted hashes. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder">saltOrder</a></code> | <code>string</code> | Specifies whether salt was pre- or postfixed to the password before hashing. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.workFactor">workFactor</a></code> | <code>number</code> | Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-okta.user.UserPasswordHash.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The algorithm used to generate the hash using the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#algorithm User#algorithm}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.UserPasswordHash.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used).

This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#value User#value}

---

##### `salt`<sup>Optional</sup> <a name="salt" id="@cdktf/provider-okta.user.UserPasswordHash.property.salt"></a>

```typescript
public readonly salt: string;
```

- *Type:* string

Only required for salted hashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#salt User#salt}

---

##### `saltOrder`<sup>Optional</sup> <a name="saltOrder" id="@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder"></a>

```typescript
public readonly saltOrder: string;
```

- *Type:* string

Specifies whether salt was pre- or postfixed to the password before hashing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#salt_order User#salt_order}

---

##### `workFactor`<sup>Optional</sup> <a name="workFactor" id="@cdktf/provider-okta.user.UserPasswordHash.property.workFactor"></a>

```typescript
public readonly workFactor: number;
```

- *Type:* number

Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/user#work_factor User#work_factor}

---

## Classes <a name="Classes" id="Classes"></a>

### UserPasswordHashOutputReference <a name="UserPasswordHashOutputReference" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-okta'

new user.UserPasswordHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt">resetSalt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder">resetSaltOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor">resetWorkFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSalt` <a name="resetSalt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt"></a>

```typescript
public resetSalt(): void
```

##### `resetSaltOrder` <a name="resetSaltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder"></a>

```typescript
public resetSaltOrder(): void
```

##### `resetWorkFactor` <a name="resetWorkFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor"></a>

```typescript
public resetWorkFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput">saltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput">saltOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput">workFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt">salt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder">saltOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor">workFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `saltInput`<sup>Optional</sup> <a name="saltInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput"></a>

```typescript
public readonly saltInput: string;
```

- *Type:* string

---

##### `saltOrderInput`<sup>Optional</sup> <a name="saltOrderInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput"></a>

```typescript
public readonly saltOrderInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `workFactorInput`<sup>Optional</sup> <a name="workFactorInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput"></a>

```typescript
public readonly workFactorInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `salt`<sup>Required</sup> <a name="salt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt"></a>

```typescript
public readonly salt: string;
```

- *Type:* string

---

##### `saltOrder`<sup>Required</sup> <a name="saltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder"></a>

```typescript
public readonly saltOrder: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `workFactor`<sup>Required</sup> <a name="workFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor"></a>

```typescript
public readonly workFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: UserPasswordHash;
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---



