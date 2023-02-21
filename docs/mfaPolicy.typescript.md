# `mfaPolicy` Submodule <a name="`mfaPolicy` Submodule" id="@cdktf/provider-okta.mfaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicy <a name="MfaPolicy" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy okta_mfa_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer"></a>

```typescript
import { mfaPolicy } from '@cdktf/provider-okta'

new mfaPolicy.MfaPolicy(scope: Construct, id: string, config: MfaPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig">MfaPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig">MfaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo">resetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp">resetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F">resetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn">resetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp">resetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp">resetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie">resetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall">resetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail">resetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp">resetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword">resetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush">resetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion">resetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms">resetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify">resetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa">resetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken">resetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion">resetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip">resetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn">resetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken">resetYubikeyToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDuo` <a name="resetDuo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo"></a>

```typescript
public resetDuo(): void
```

##### `resetExternalIdp` <a name="resetExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp"></a>

```typescript
public resetExternalIdp(): void
```

##### `resetFidoU2F` <a name="resetFidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F"></a>

```typescript
public resetFidoU2F(): void
```

##### `resetFidoWebauthn` <a name="resetFidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn"></a>

```typescript
public resetFidoWebauthn(): void
```

##### `resetGoogleOtp` <a name="resetGoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp"></a>

```typescript
public resetGoogleOtp(): void
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded"></a>

```typescript
public resetGroupsIncluded(): void
```

##### `resetHotp` <a name="resetHotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp"></a>

```typescript
public resetHotp(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOie` <a name="resetIsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie"></a>

```typescript
public resetIsOie(): void
```

##### `resetOktaCall` <a name="resetOktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall"></a>

```typescript
public resetOktaCall(): void
```

##### `resetOktaEmail` <a name="resetOktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail"></a>

```typescript
public resetOktaEmail(): void
```

##### `resetOktaOtp` <a name="resetOktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp"></a>

```typescript
public resetOktaOtp(): void
```

##### `resetOktaPassword` <a name="resetOktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword"></a>

```typescript
public resetOktaPassword(): void
```

##### `resetOktaPush` <a name="resetOktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush"></a>

```typescript
public resetOktaPush(): void
```

##### `resetOktaQuestion` <a name="resetOktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion"></a>

```typescript
public resetOktaQuestion(): void
```

##### `resetOktaSms` <a name="resetOktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms"></a>

```typescript
public resetOktaSms(): void
```

##### `resetOktaVerify` <a name="resetOktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify"></a>

```typescript
public resetOktaVerify(): void
```

##### `resetOnpremMfa` <a name="resetOnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa"></a>

```typescript
public resetOnpremMfa(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRsaToken` <a name="resetRsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken"></a>

```typescript
public resetRsaToken(): void
```

##### `resetSecurityQuestion` <a name="resetSecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion"></a>

```typescript
public resetSecurityQuestion(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSymantecVip` <a name="resetSymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip"></a>

```typescript
public resetSymantecVip(): void
```

##### `resetWebauthn` <a name="resetWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn"></a>

```typescript
public resetWebauthn(): void
```

##### `resetYubikeyToken` <a name="resetYubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken"></a>

```typescript
public resetYubikeyToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct"></a>

```typescript
import { mfaPolicy } from '@cdktf/provider-okta'

mfaPolicy.MfaPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement"></a>

```typescript
import { mfaPolicy } from '@cdktf/provider-okta'

mfaPolicy.MfaPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource"></a>

```typescript
import { mfaPolicy } from '@cdktf/provider-okta'

mfaPolicy.MfaPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput">duoInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput">externalIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput">fidoU2FInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput">fidoWebauthnInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput">googleOtpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput">hotpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput">isOieInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput">oktaCallInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput">oktaEmailInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput">oktaOtpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput">oktaPasswordInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput">oktaPushInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput">oktaQuestionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput">oktaSmsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput">oktaVerifyInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput">onpremMfaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput">phoneNumberInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput">rsaTokenInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput">securityQuestionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput">symantecVipInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput">webauthnInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput">yubikeyTokenInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo">duo</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp">externalIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F">fidoU2F</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn">fidoWebauthn</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp">googleOtp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp">hotp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie">isOie</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall">oktaCall</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail">oktaEmail</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp">oktaOtp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword">oktaPassword</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush">oktaPush</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion">oktaQuestion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms">oktaSms</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify">oktaVerify</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa">onpremMfa</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber">phoneNumber</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken">rsaToken</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion">securityQuestion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip">symantecVip</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn">webauthn</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken">yubikeyToken</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `duoInput`<sup>Optional</sup> <a name="duoInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput"></a>

```typescript
public readonly duoInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdpInput`<sup>Optional</sup> <a name="externalIdpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput"></a>

```typescript
public readonly externalIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoU2FInput`<sup>Optional</sup> <a name="fidoU2FInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput"></a>

```typescript
public readonly fidoU2FInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoWebauthnInput`<sup>Optional</sup> <a name="fidoWebauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput"></a>

```typescript
public readonly fidoWebauthnInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `googleOtpInput`<sup>Optional</sup> <a name="googleOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput"></a>

```typescript
public readonly googleOtpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput"></a>

```typescript
public readonly groupsIncludedInput: string[];
```

- *Type:* string[]

---

##### `hotpInput`<sup>Optional</sup> <a name="hotpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput"></a>

```typescript
public readonly hotpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOieInput`<sup>Optional</sup> <a name="isOieInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput"></a>

```typescript
public readonly isOieInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oktaCallInput`<sup>Optional</sup> <a name="oktaCallInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput"></a>

```typescript
public readonly oktaCallInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaEmailInput`<sup>Optional</sup> <a name="oktaEmailInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput"></a>

```typescript
public readonly oktaEmailInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaOtpInput`<sup>Optional</sup> <a name="oktaOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput"></a>

```typescript
public readonly oktaOtpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPasswordInput`<sup>Optional</sup> <a name="oktaPasswordInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput"></a>

```typescript
public readonly oktaPasswordInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPushInput`<sup>Optional</sup> <a name="oktaPushInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput"></a>

```typescript
public readonly oktaPushInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaQuestionInput`<sup>Optional</sup> <a name="oktaQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput"></a>

```typescript
public readonly oktaQuestionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaSmsInput`<sup>Optional</sup> <a name="oktaSmsInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput"></a>

```typescript
public readonly oktaSmsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaVerifyInput`<sup>Optional</sup> <a name="oktaVerifyInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput"></a>

```typescript
public readonly oktaVerifyInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onpremMfaInput`<sup>Optional</sup> <a name="onpremMfaInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput"></a>

```typescript
public readonly onpremMfaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `rsaTokenInput`<sup>Optional</sup> <a name="rsaTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput"></a>

```typescript
public readonly rsaTokenInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityQuestionInput`<sup>Optional</sup> <a name="securityQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput"></a>

```typescript
public readonly securityQuestionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `symantecVipInput`<sup>Optional</sup> <a name="symantecVipInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput"></a>

```typescript
public readonly symantecVipInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webauthnInput`<sup>Optional</sup> <a name="webauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput"></a>

```typescript
public readonly webauthnInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `yubikeyTokenInput`<sup>Optional</sup> <a name="yubikeyTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput"></a>

```typescript
public readonly yubikeyTokenInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo"></a>

```typescript
public readonly duo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdp`<sup>Required</sup> <a name="externalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp"></a>

```typescript
public readonly externalIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoU2F`<sup>Required</sup> <a name="fidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F"></a>

```typescript
public readonly fidoU2F: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoWebauthn`<sup>Required</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn"></a>

```typescript
public readonly fidoWebauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `googleOtp`<sup>Required</sup> <a name="googleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp"></a>

```typescript
public readonly googleOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp"></a>

```typescript
public readonly hotp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOie`<sup>Required</sup> <a name="isOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie"></a>

```typescript
public readonly isOie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oktaCall`<sup>Required</sup> <a name="oktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall"></a>

```typescript
public readonly oktaCall: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaEmail`<sup>Required</sup> <a name="oktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail"></a>

```typescript
public readonly oktaEmail: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaOtp`<sup>Required</sup> <a name="oktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp"></a>

```typescript
public readonly oktaOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPassword`<sup>Required</sup> <a name="oktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword"></a>

```typescript
public readonly oktaPassword: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPush`<sup>Required</sup> <a name="oktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush"></a>

```typescript
public readonly oktaPush: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaQuestion`<sup>Required</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion"></a>

```typescript
public readonly oktaQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaSms`<sup>Required</sup> <a name="oktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms"></a>

```typescript
public readonly oktaSms: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaVerify`<sup>Required</sup> <a name="oktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify"></a>

```typescript
public readonly oktaVerify: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onpremMfa`<sup>Required</sup> <a name="onpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa"></a>

```typescript
public readonly onpremMfa: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rsaToken`<sup>Required</sup> <a name="rsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken"></a>

```typescript
public readonly rsaToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityQuestion`<sup>Required</sup> <a name="securityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion"></a>

```typescript
public readonly securityQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `symantecVip`<sup>Required</sup> <a name="symantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip"></a>

```typescript
public readonly symantecVip: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn"></a>

```typescript
public readonly webauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `yubikeyToken`<sup>Required</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken"></a>

```typescript
public readonly yubikeyToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyConfig <a name="MfaPolicyConfig" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.Initializer"></a>

```typescript
import { mfaPolicy } from '@cdktf/provider-okta'

const mfaPolicyConfig: mfaPolicy.MfaPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name">name</a></code> | <code>string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description">description</a></code> | <code>string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo">duo</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp">externalIdp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F">fidoU2F</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn">fidoWebauthn</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp">googleOtp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp">hotp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie">isOie</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall">oktaCall</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail">oktaEmail</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp">oktaOtp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword">oktaPassword</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush">oktaPush</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion">oktaQuestion</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms">oktaSms</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify">oktaVerify</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa">onpremMfa</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber">phoneNumber</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority">priority</a></code> | <code>number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken">rsaToken</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion">securityQuestion</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status">status</a></code> | <code>string</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip">symantecVip</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn">webauthn</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken">yubikeyToken</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#name MfaPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#description MfaPolicy#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo"></a>

```typescript
public readonly duo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp"></a>

```typescript
public readonly externalIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F"></a>

```typescript
public readonly fidoU2F: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn"></a>

```typescript
public readonly fidoWebauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp"></a>

```typescript
public readonly googleOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}.

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#groups_included MfaPolicy#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp"></a>

```typescript
public readonly hotp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie"></a>

```typescript
public readonly isOie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#is_oie MfaPolicy#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall"></a>

```typescript
public readonly oktaCall: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail"></a>

```typescript
public readonly oktaEmail: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp"></a>

```typescript
public readonly oktaOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword"></a>

```typescript
public readonly oktaPassword: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush"></a>

```typescript
public readonly oktaPush: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion"></a>

```typescript
public readonly oktaQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms"></a>

```typescript
public readonly oktaSms: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify"></a>

```typescript
public readonly oktaVerify: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa"></a>

```typescript
public readonly onpremMfa: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#priority MfaPolicy#priority}

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken"></a>

```typescript
public readonly rsaToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion"></a>

```typescript
public readonly securityQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#status MfaPolicy#status}

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip"></a>

```typescript
public readonly symantecVip: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn"></a>

```typescript
public readonly webauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken"></a>

```typescript
public readonly yubikeyToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}.

---



