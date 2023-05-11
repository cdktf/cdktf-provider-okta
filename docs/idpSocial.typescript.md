# `okta_idp_social`

Refer to the Terraform Registory for docs: [`okta_idp_social`](https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social).

# `idpSocial` Submodule <a name="`idpSocial` Submodule" id="@cdktf/provider-okta.idpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSocial <a name="IdpSocial" id="@cdktf/provider-okta.idpSocial.IdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer"></a>

```typescript
import { idpSocial } from '@cdktf/provider-okta'

new idpSocial.IdpSocial(scope: Construct, id: string, config: IdpSocialConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig">IdpSocialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig">IdpSocialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid">resetAppleKid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey">resetApplePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId">resetAppleTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idpSocial.IdpSocial.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction"></a>

```typescript
public resetAccountLinkAction(): void
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude"></a>

```typescript
public resetAccountLinkGroupInclude(): void
```

##### `resetAppleKid` <a name="resetAppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid"></a>

```typescript
public resetAppleKid(): void
```

##### `resetApplePrivateKey` <a name="resetApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey"></a>

```typescript
public resetApplePrivateKey(): void
```

##### `resetAppleTeamId` <a name="resetAppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId"></a>

```typescript
public resetAppleTeamId(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction"></a>

```typescript
public resetDeprovisionedAction(): void
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction"></a>

```typescript
public resetGroupsAction(): void
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment"></a>

```typescript
public resetGroupsAssignment(): void
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute"></a>

```typescript
public resetGroupsAttribute(): void
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter"></a>

```typescript
public resetGroupsFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode"></a>

```typescript
public resetIssuerMode(): void
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew"></a>

```typescript
public resetMaxClockSkew(): void
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster"></a>

```typescript
public resetProfileMaster(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction"></a>

```typescript
public resetProvisioningAction(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute"></a>

```typescript
public resetSubjectMatchAttribute(): void
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType"></a>

```typescript
public resetSubjectMatchType(): void
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction"></a>

```typescript
public resetSuspendedAction(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct"></a>

```typescript
import { idpSocial } from '@cdktf/provider-okta'

idpSocial.IdpSocial.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement"></a>

```typescript
import { idpSocial } from '@cdktf/provider-okta'

idpSocial.IdpSocial.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource"></a>

```typescript
import { idpSocial } from '@cdktf/provider-okta'

idpSocial.IdpSocial.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding">authorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding">tokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput">appleKidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput">applePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput">appleTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput">groupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput">groupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput">issuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput">profileMasterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput">provisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput">suspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid">appleKid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey">applePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId">appleTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction">groupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding"></a>

```typescript
public readonly authorizationBinding: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding"></a>

```typescript
public readonly tokenBinding: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput"></a>

```typescript
public readonly accountLinkActionInput: string;
```

- *Type:* string

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput"></a>

```typescript
public readonly accountLinkGroupIncludeInput: string[];
```

- *Type:* string[]

---

##### `appleKidInput`<sup>Optional</sup> <a name="appleKidInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput"></a>

```typescript
public readonly appleKidInput: string;
```

- *Type:* string

---

##### `applePrivateKeyInput`<sup>Optional</sup> <a name="applePrivateKeyInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput"></a>

```typescript
public readonly applePrivateKeyInput: string;
```

- *Type:* string

---

##### `appleTeamIdInput`<sup>Optional</sup> <a name="appleTeamIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput"></a>

```typescript
public readonly appleTeamIdInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput"></a>

```typescript
public readonly deprovisionedActionInput: string;
```

- *Type:* string

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput"></a>

```typescript
public readonly groupsActionInput: string;
```

- *Type:* string

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput"></a>

```typescript
public readonly groupsAssignmentInput: string[];
```

- *Type:* string[]

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput"></a>

```typescript
public readonly groupsAttributeInput: string;
```

- *Type:* string

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput"></a>

```typescript
public readonly groupsFilterInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput"></a>

```typescript
public readonly issuerModeInput: string;
```

- *Type:* string

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput"></a>

```typescript
public readonly maxClockSkewInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput"></a>

```typescript
public readonly profileMasterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput"></a>

```typescript
public readonly provisioningActionInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput"></a>

```typescript
public readonly subjectMatchAttributeInput: string;
```

- *Type:* string

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput"></a>

```typescript
public readonly subjectMatchTypeInput: string;
```

- *Type:* string

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput"></a>

```typescript
public readonly suspendedActionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

---

##### `appleKid`<sup>Required</sup> <a name="appleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid"></a>

```typescript
public readonly appleKid: string;
```

- *Type:* string

---

##### `applePrivateKey`<sup>Required</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey"></a>

```typescript
public readonly applePrivateKey: string;
```

- *Type:* string

---

##### `appleTeamId`<sup>Required</sup> <a name="appleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId"></a>

```typescript
public readonly appleTeamId: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSocialConfig <a name="IdpSocialConfig" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.Initializer"></a>

```typescript
import { idpSocial } from '@cdktf/provider-okta'

const idpSocialConfig: idpSocial.IdpSocialConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name">name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#scopes IdpSocial#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type">type</a></code> | <code>string</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid">appleKid</a></code> | <code>string</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey">applePrivateKey</a></code> | <code>string</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId">appleTeamId</a></code> | <code>string</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#client_id IdpSocial#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#client_secret IdpSocial#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction">groupsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_action IdpSocial#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#id IdpSocial#id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode">issuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#profile_master IdpSocial#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#status IdpSocial#status}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#username_template IdpSocial#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#name IdpSocial#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#scopes IdpSocial#scopes}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#type IdpSocial#type}

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}.

---

##### `appleKid`<sup>Optional</sup> <a name="appleKid" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid"></a>

```typescript
public readonly appleKid: string;
```

- *Type:* string

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}

---

##### `applePrivateKey`<sup>Optional</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey"></a>

```typescript
public readonly applePrivateKey: string;
```

- *Type:* string

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}

---

##### `appleTeamId`<sup>Optional</sup> <a name="appleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId"></a>

```typescript
public readonly appleTeamId: string;
```

- *Type:* string

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#client_id IdpSocial#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#client_secret IdpSocial#client_secret}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_action IdpSocial#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#id IdpSocial#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#profile_master IdpSocial#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#status IdpSocial#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/idp_social#username_template IdpSocial#username_template}.

---



