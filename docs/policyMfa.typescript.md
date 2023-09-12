# `okta_policy_mfa`

Refer to the Terraform Registory for docs: [`okta_policy_mfa`](https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa).

# `policyMfa` Submodule <a name="`policyMfa` Submodule" id="@cdktf/provider-okta.policyMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfa <a name="PolicyMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa okta_policy_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer"></a>

```typescript
import { policyMfa } from '@cdktf/provider-okta'

new policyMfa.PolicyMfa(scope: Construct, id: string, config: PolicyMfaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig">PolicyMfaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.policyMfa.PolicyMfa.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig">PolicyMfaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo">resetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp">resetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F">resetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn">resetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp">resetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp">resetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie">resetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall">resetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail">resetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp">resetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword">resetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush">resetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion">resetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms">resetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify">resetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa">resetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken">resetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion">resetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip">resetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn">resetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken">resetYubikeyToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyMfa.PolicyMfa.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyMfa.PolicyMfa.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyMfa.PolicyMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDuo` <a name="resetDuo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetDuo"></a>

```typescript
public resetDuo(): void
```

##### `resetExternalIdp` <a name="resetExternalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetExternalIdp"></a>

```typescript
public resetExternalIdp(): void
```

##### `resetFidoU2F` <a name="resetFidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoU2F"></a>

```typescript
public resetFidoU2F(): void
```

##### `resetFidoWebauthn` <a name="resetFidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetFidoWebauthn"></a>

```typescript
public resetFidoWebauthn(): void
```

##### `resetGoogleOtp` <a name="resetGoogleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGoogleOtp"></a>

```typescript
public resetGoogleOtp(): void
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetGroupsIncluded"></a>

```typescript
public resetGroupsIncluded(): void
```

##### `resetHotp` <a name="resetHotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetHotp"></a>

```typescript
public resetHotp(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOie` <a name="resetIsOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetIsOie"></a>

```typescript
public resetIsOie(): void
```

##### `resetOktaCall` <a name="resetOktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaCall"></a>

```typescript
public resetOktaCall(): void
```

##### `resetOktaEmail` <a name="resetOktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaEmail"></a>

```typescript
public resetOktaEmail(): void
```

##### `resetOktaOtp` <a name="resetOktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaOtp"></a>

```typescript
public resetOktaOtp(): void
```

##### `resetOktaPassword` <a name="resetOktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPassword"></a>

```typescript
public resetOktaPassword(): void
```

##### `resetOktaPush` <a name="resetOktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaPush"></a>

```typescript
public resetOktaPush(): void
```

##### `resetOktaQuestion` <a name="resetOktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaQuestion"></a>

```typescript
public resetOktaQuestion(): void
```

##### `resetOktaSms` <a name="resetOktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaSms"></a>

```typescript
public resetOktaSms(): void
```

##### `resetOktaVerify` <a name="resetOktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOktaVerify"></a>

```typescript
public resetOktaVerify(): void
```

##### `resetOnpremMfa` <a name="resetOnpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetOnpremMfa"></a>

```typescript
public resetOnpremMfa(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRsaToken` <a name="resetRsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetRsaToken"></a>

```typescript
public resetRsaToken(): void
```

##### `resetSecurityQuestion` <a name="resetSecurityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSecurityQuestion"></a>

```typescript
public resetSecurityQuestion(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSymantecVip` <a name="resetSymantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetSymantecVip"></a>

```typescript
public resetSymantecVip(): void
```

##### `resetWebauthn` <a name="resetWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetWebauthn"></a>

```typescript
public resetWebauthn(): void
```

##### `resetYubikeyToken` <a name="resetYubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.resetYubikeyToken"></a>

```typescript
public resetYubikeyToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct"></a>

```typescript
import { policyMfa } from '@cdktf/provider-okta'

policyMfa.PolicyMfa.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement"></a>

```typescript
import { policyMfa } from '@cdktf/provider-okta'

policyMfa.PolicyMfa.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource"></a>

```typescript
import { policyMfa } from '@cdktf/provider-okta'

policyMfa.PolicyMfa.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyMfa.PolicyMfa.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput">duoInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput">externalIdpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput">fidoU2FInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput">fidoWebauthnInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput">googleOtpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput">hotpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput">isOieInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput">oktaCallInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput">oktaEmailInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput">oktaOtpInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput">oktaPasswordInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput">oktaPushInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput">oktaQuestionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput">oktaSmsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput">oktaVerifyInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput">onpremMfaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput">phoneNumberInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput">rsaTokenInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput">securityQuestionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput">symantecVipInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput">webauthnInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput">yubikeyTokenInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo">duo</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp">externalIdp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F">fidoU2F</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn">fidoWebauthn</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp">googleOtp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp">hotp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie">isOie</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall">oktaCall</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail">oktaEmail</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp">oktaOtp</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword">oktaPassword</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush">oktaPush</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion">oktaQuestion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms">oktaSms</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify">oktaVerify</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa">onpremMfa</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber">phoneNumber</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken">rsaToken</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion">securityQuestion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip">symantecVip</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn">webauthn</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken">yubikeyToken</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `duoInput`<sup>Optional</sup> <a name="duoInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duoInput"></a>

```typescript
public readonly duoInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdpInput`<sup>Optional</sup> <a name="externalIdpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdpInput"></a>

```typescript
public readonly externalIdpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoU2FInput`<sup>Optional</sup> <a name="fidoU2FInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2FInput"></a>

```typescript
public readonly fidoU2FInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoWebauthnInput`<sup>Optional</sup> <a name="fidoWebauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthnInput"></a>

```typescript
public readonly fidoWebauthnInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `googleOtpInput`<sup>Optional</sup> <a name="googleOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtpInput"></a>

```typescript
public readonly googleOtpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncludedInput"></a>

```typescript
public readonly groupsIncludedInput: string[];
```

- *Type:* string[]

---

##### `hotpInput`<sup>Optional</sup> <a name="hotpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotpInput"></a>

```typescript
public readonly hotpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOieInput`<sup>Optional</sup> <a name="isOieInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOieInput"></a>

```typescript
public readonly isOieInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oktaCallInput`<sup>Optional</sup> <a name="oktaCallInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCallInput"></a>

```typescript
public readonly oktaCallInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaEmailInput`<sup>Optional</sup> <a name="oktaEmailInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmailInput"></a>

```typescript
public readonly oktaEmailInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaOtpInput`<sup>Optional</sup> <a name="oktaOtpInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtpInput"></a>

```typescript
public readonly oktaOtpInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPasswordInput`<sup>Optional</sup> <a name="oktaPasswordInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPasswordInput"></a>

```typescript
public readonly oktaPasswordInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPushInput`<sup>Optional</sup> <a name="oktaPushInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPushInput"></a>

```typescript
public readonly oktaPushInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaQuestionInput`<sup>Optional</sup> <a name="oktaQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestionInput"></a>

```typescript
public readonly oktaQuestionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaSmsInput`<sup>Optional</sup> <a name="oktaSmsInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSmsInput"></a>

```typescript
public readonly oktaSmsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaVerifyInput`<sup>Optional</sup> <a name="oktaVerifyInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerifyInput"></a>

```typescript
public readonly oktaVerifyInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onpremMfaInput`<sup>Optional</sup> <a name="onpremMfaInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfaInput"></a>

```typescript
public readonly onpremMfaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `rsaTokenInput`<sup>Optional</sup> <a name="rsaTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaTokenInput"></a>

```typescript
public readonly rsaTokenInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityQuestionInput`<sup>Optional</sup> <a name="securityQuestionInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestionInput"></a>

```typescript
public readonly securityQuestionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `symantecVipInput`<sup>Optional</sup> <a name="symantecVipInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVipInput"></a>

```typescript
public readonly symantecVipInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webauthnInput`<sup>Optional</sup> <a name="webauthnInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthnInput"></a>

```typescript
public readonly webauthnInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `yubikeyTokenInput`<sup>Optional</sup> <a name="yubikeyTokenInput" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyTokenInput"></a>

```typescript
public readonly yubikeyTokenInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duo`<sup>Required</sup> <a name="duo" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.duo"></a>

```typescript
public readonly duo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalIdp`<sup>Required</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.externalIdp"></a>

```typescript
public readonly externalIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoU2F`<sup>Required</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoU2F"></a>

```typescript
public readonly fidoU2F: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fidoWebauthn`<sup>Required</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.fidoWebauthn"></a>

```typescript
public readonly fidoWebauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `googleOtp`<sup>Required</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.googleOtp"></a>

```typescript
public readonly googleOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

---

##### `hotp`<sup>Required</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.hotp"></a>

```typescript
public readonly hotp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOie`<sup>Required</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.isOie"></a>

```typescript
public readonly isOie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oktaCall`<sup>Required</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaCall"></a>

```typescript
public readonly oktaCall: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaEmail`<sup>Required</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaEmail"></a>

```typescript
public readonly oktaEmail: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaOtp`<sup>Required</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaOtp"></a>

```typescript
public readonly oktaOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPassword`<sup>Required</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPassword"></a>

```typescript
public readonly oktaPassword: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaPush`<sup>Required</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaPush"></a>

```typescript
public readonly oktaPush: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaQuestion`<sup>Required</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaQuestion"></a>

```typescript
public readonly oktaQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaSms`<sup>Required</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaSms"></a>

```typescript
public readonly oktaSms: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oktaVerify`<sup>Required</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.oktaVerify"></a>

```typescript
public readonly oktaVerify: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onpremMfa`<sup>Required</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.onpremMfa"></a>

```typescript
public readonly onpremMfa: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rsaToken`<sup>Required</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.rsaToken"></a>

```typescript
public readonly rsaToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityQuestion`<sup>Required</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.securityQuestion"></a>

```typescript
public readonly securityQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `symantecVip`<sup>Required</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.symantecVip"></a>

```typescript
public readonly symantecVip: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webauthn`<sup>Required</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.webauthn"></a>

```typescript
public readonly webauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `yubikeyToken`<sup>Required</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.yubikeyToken"></a>

```typescript
public readonly yubikeyToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyMfa.PolicyMfa.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaConfig <a name="PolicyMfaConfig" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.Initializer"></a>

```typescript
import { policyMfa } from '@cdktf/provider-okta'

const policyMfaConfig: policyMfa.PolicyMfaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name">name</a></code> | <code>string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description">description</a></code> | <code>string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo">duo</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#duo PolicyMfa#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp">externalIdp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F">fidoU2F</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn">fidoWebauthn</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp">googleOtp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp">hotp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#hotp PolicyMfa#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#id PolicyMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie">isOie</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall">oktaCall</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail">oktaEmail</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp">oktaOtp</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword">oktaPassword</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush">oktaPush</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion">oktaQuestion</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms">oktaSms</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify">oktaVerify</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa">onpremMfa</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber">phoneNumber</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority">priority</a></code> | <code>number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken">rsaToken</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion">securityQuestion</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#security_question PolicyMfa#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status">status</a></code> | <code>string</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip">symantecVip</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn">webauthn</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken">yubikeyToken</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#name PolicyMfa#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#description PolicyMfa#description}

---

##### `duo`<sup>Optional</sup> <a name="duo" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.duo"></a>

```typescript
public readonly duo: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#duo PolicyMfa#duo}.

---

##### `externalIdp`<sup>Optional</sup> <a name="externalIdp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.externalIdp"></a>

```typescript
public readonly externalIdp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#external_idp PolicyMfa#external_idp}.

---

##### `fidoU2F`<sup>Optional</sup> <a name="fidoU2F" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoU2F"></a>

```typescript
public readonly fidoU2F: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_u2f PolicyMfa#fido_u2f}.

---

##### `fidoWebauthn`<sup>Optional</sup> <a name="fidoWebauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.fidoWebauthn"></a>

```typescript
public readonly fidoWebauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#fido_webauthn PolicyMfa#fido_webauthn}.

---

##### `googleOtp`<sup>Optional</sup> <a name="googleOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.googleOtp"></a>

```typescript
public readonly googleOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#google_otp PolicyMfa#google_otp}.

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#groups_included PolicyMfa#groups_included}

---

##### `hotp`<sup>Optional</sup> <a name="hotp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.hotp"></a>

```typescript
public readonly hotp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#hotp PolicyMfa#hotp}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#id PolicyMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOie`<sup>Optional</sup> <a name="isOie" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.isOie"></a>

```typescript
public readonly isOie: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#is_oie PolicyMfa#is_oie}

---

##### `oktaCall`<sup>Optional</sup> <a name="oktaCall" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaCall"></a>

```typescript
public readonly oktaCall: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_call PolicyMfa#okta_call}.

---

##### `oktaEmail`<sup>Optional</sup> <a name="oktaEmail" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaEmail"></a>

```typescript
public readonly oktaEmail: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_email PolicyMfa#okta_email}.

---

##### `oktaOtp`<sup>Optional</sup> <a name="oktaOtp" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaOtp"></a>

```typescript
public readonly oktaOtp: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_otp PolicyMfa#okta_otp}.

---

##### `oktaPassword`<sup>Optional</sup> <a name="oktaPassword" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPassword"></a>

```typescript
public readonly oktaPassword: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_password PolicyMfa#okta_password}.

---

##### `oktaPush`<sup>Optional</sup> <a name="oktaPush" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaPush"></a>

```typescript
public readonly oktaPush: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_push PolicyMfa#okta_push}.

---

##### `oktaQuestion`<sup>Optional</sup> <a name="oktaQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaQuestion"></a>

```typescript
public readonly oktaQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_question PolicyMfa#okta_question}.

---

##### `oktaSms`<sup>Optional</sup> <a name="oktaSms" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaSms"></a>

```typescript
public readonly oktaSms: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_sms PolicyMfa#okta_sms}.

---

##### `oktaVerify`<sup>Optional</sup> <a name="oktaVerify" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.oktaVerify"></a>

```typescript
public readonly oktaVerify: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#okta_verify PolicyMfa#okta_verify}.

---

##### `onpremMfa`<sup>Optional</sup> <a name="onpremMfa" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.onpremMfa"></a>

```typescript
public readonly onpremMfa: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#onprem_mfa PolicyMfa#onprem_mfa}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#phone_number PolicyMfa#phone_number}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#priority PolicyMfa#priority}

---

##### `rsaToken`<sup>Optional</sup> <a name="rsaToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.rsaToken"></a>

```typescript
public readonly rsaToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#rsa_token PolicyMfa#rsa_token}.

---

##### `securityQuestion`<sup>Optional</sup> <a name="securityQuestion" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.securityQuestion"></a>

```typescript
public readonly securityQuestion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#security_question PolicyMfa#security_question}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#status PolicyMfa#status}

---

##### `symantecVip`<sup>Optional</sup> <a name="symantecVip" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.symantecVip"></a>

```typescript
public readonly symantecVip: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#symantec_vip PolicyMfa#symantec_vip}.

---

##### `webauthn`<sup>Optional</sup> <a name="webauthn" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.webauthn"></a>

```typescript
public readonly webauthn: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#webauthn PolicyMfa#webauthn}.

---

##### `yubikeyToken`<sup>Optional</sup> <a name="yubikeyToken" id="@cdktf/provider-okta.policyMfa.PolicyMfaConfig.property.yubikeyToken"></a>

```typescript
public readonly yubikeyToken: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/policy_mfa#yubikey_token PolicyMfa#yubikey_token}.

---



