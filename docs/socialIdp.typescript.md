# `socialIdp` Submodule <a name="`socialIdp` Submodule" id="@cdktf/provider-okta.socialIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SocialIdp <a name="SocialIdp" id="@cdktf/provider-okta.socialIdp.SocialIdp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/social_idp okta_social_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer"></a>

```typescript
import { socialIdp } from '@cdktf/provider-okta'

new socialIdp.SocialIdp(scope: Construct, id: string, config: SocialIdpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig">SocialIdpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig">SocialIdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleKid">resetAppleKid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetApplePrivateKey">resetApplePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleTeamId">resetAppleTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchAttribute">resetMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchType">resetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.socialIdp.SocialIdp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.socialIdp.SocialIdp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.socialIdp.SocialIdp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkAction"></a>

```typescript
public resetAccountLinkAction(): void
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkGroupInclude"></a>

```typescript
public resetAccountLinkGroupInclude(): void
```

##### `resetAppleKid` <a name="resetAppleKid" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleKid"></a>

```typescript
public resetAppleKid(): void
```

##### `resetApplePrivateKey` <a name="resetApplePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetApplePrivateKey"></a>

```typescript
public resetApplePrivateKey(): void
```

##### `resetAppleTeamId` <a name="resetAppleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleTeamId"></a>

```typescript
public resetAppleTeamId(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetDeprovisionedAction"></a>

```typescript
public resetDeprovisionedAction(): void
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAction"></a>

```typescript
public resetGroupsAction(): void
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAssignment"></a>

```typescript
public resetGroupsAssignment(): void
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAttribute"></a>

```typescript
public resetGroupsAttribute(): void
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsFilter"></a>

```typescript
public resetGroupsFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetIssuerMode"></a>

```typescript
public resetIssuerMode(): void
```

##### `resetMatchAttribute` <a name="resetMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchAttribute"></a>

```typescript
public resetMatchAttribute(): void
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchType"></a>

```typescript
public resetMatchType(): void
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMaxClockSkew"></a>

```typescript
public resetMaxClockSkew(): void
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProfileMaster"></a>

```typescript
public resetProfileMaster(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProvisioningAction"></a>

```typescript
public resetProvisioningAction(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchAttribute"></a>

```typescript
public resetSubjectMatchAttribute(): void
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchType"></a>

```typescript
public resetSubjectMatchType(): void
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSuspendedAction"></a>

```typescript
public resetSuspendedAction(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct"></a>

```typescript
import { socialIdp } from '@cdktf/provider-okta'

socialIdp.SocialIdp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement"></a>

```typescript
import { socialIdp } from '@cdktf/provider-okta'

socialIdp.SocialIdp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource"></a>

```typescript
import { socialIdp } from '@cdktf/provider-okta'

socialIdp.SocialIdp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationBinding">authorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenBinding">tokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKidInput">appleKidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKeyInput">applePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamIdInput">appleTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsActionInput">groupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilterInput">groupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerModeInput">issuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttributeInput">matchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchTypeInput">matchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMasterInput">profileMasterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningActionInput">provisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedActionInput">suspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKid">appleKid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKey">applePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamId">appleTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAction">groupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttribute">matchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationBinding"></a>

```typescript
public readonly authorizationBinding: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenBinding"></a>

```typescript
public readonly tokenBinding: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkActionInput"></a>

```typescript
public readonly accountLinkActionInput: string;
```

- *Type:* string

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupIncludeInput"></a>

```typescript
public readonly accountLinkGroupIncludeInput: string[];
```

- *Type:* string[]

---

##### `appleKidInput`<sup>Optional</sup> <a name="appleKidInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKidInput"></a>

```typescript
public readonly appleKidInput: string;
```

- *Type:* string

---

##### `applePrivateKeyInput`<sup>Optional</sup> <a name="applePrivateKeyInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKeyInput"></a>

```typescript
public readonly applePrivateKeyInput: string;
```

- *Type:* string

---

##### `appleTeamIdInput`<sup>Optional</sup> <a name="appleTeamIdInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamIdInput"></a>

```typescript
public readonly appleTeamIdInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedActionInput"></a>

```typescript
public readonly deprovisionedActionInput: string;
```

- *Type:* string

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsActionInput"></a>

```typescript
public readonly groupsActionInput: string;
```

- *Type:* string

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignmentInput"></a>

```typescript
public readonly groupsAssignmentInput: string[];
```

- *Type:* string[]

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttributeInput"></a>

```typescript
public readonly groupsAttributeInput: string;
```

- *Type:* string

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilterInput"></a>

```typescript
public readonly groupsFilterInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerModeInput"></a>

```typescript
public readonly issuerModeInput: string;
```

- *Type:* string

---

##### `matchAttributeInput`<sup>Optional</sup> <a name="matchAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttributeInput"></a>

```typescript
public readonly matchAttributeInput: string;
```

- *Type:* string

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchTypeInput"></a>

```typescript
public readonly matchTypeInput: string;
```

- *Type:* string

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkewInput"></a>

```typescript
public readonly maxClockSkewInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMasterInput"></a>

```typescript
public readonly profileMasterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningActionInput"></a>

```typescript
public readonly provisioningActionInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttributeInput"></a>

```typescript
public readonly subjectMatchAttributeInput: string;
```

- *Type:* string

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchTypeInput"></a>

```typescript
public readonly subjectMatchTypeInput: string;
```

- *Type:* string

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedActionInput"></a>

```typescript
public readonly suspendedActionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

---

##### `appleKid`<sup>Required</sup> <a name="appleKid" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKid"></a>

```typescript
public readonly appleKid: string;
```

- *Type:* string

---

##### `applePrivateKey`<sup>Required</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKey"></a>

```typescript
public readonly applePrivateKey: string;
```

- *Type:* string

---

##### `appleTeamId`<sup>Required</sup> <a name="appleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamId"></a>

```typescript
public readonly appleTeamId: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `matchAttribute`<sup>Required</sup> <a name="matchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttribute"></a>

```typescript
public readonly matchAttribute: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SocialIdpConfig <a name="SocialIdpConfig" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.Initializer"></a>

```typescript
import { socialIdp } from '@cdktf/provider-okta'

const socialIdpConfig: socialIdp.SocialIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.name">name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#scopes SocialIdp#scopes}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.type">type</a></code> | <code>string</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_action SocialIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_group_include SocialIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleKid">appleKid</a></code> | <code>string</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.applePrivateKey">applePrivateKey</a></code> | <code>string</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleTeamId">appleTeamId</a></code> | <code>string</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_id SocialIdp#client_id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_secret SocialIdp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAction">groupsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_action SocialIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_assignment SocialIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_attribute SocialIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_filter SocialIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#id SocialIdp#id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.issuerMode">issuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchAttribute">matchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_attribute SocialIdp#match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchType">matchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_type SocialIdp#match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#max_clock_skew SocialIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#profile_master SocialIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#protocol_type SocialIdp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#provisioning_action SocialIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#status SocialIdp#status}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_type SocialIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#suspended_action SocialIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#username_template SocialIdp#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#name SocialIdp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#scopes SocialIdp#scopes}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#type SocialIdp#type}

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_action SocialIdp#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_group_include SocialIdp#account_link_group_include}.

---

##### `appleKid`<sup>Optional</sup> <a name="appleKid" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleKid"></a>

```typescript
public readonly appleKid: string;
```

- *Type:* string

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#apple_kid SocialIdp#apple_kid}

---

##### `applePrivateKey`<sup>Optional</sup> <a name="applePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.applePrivateKey"></a>

```typescript
public readonly applePrivateKey: string;
```

- *Type:* string

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#apple_private_key SocialIdp#apple_private_key}

---

##### `appleTeamId`<sup>Optional</sup> <a name="appleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleTeamId"></a>

```typescript
public readonly appleTeamId: string;
```

- *Type:* string

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#apple_team_id SocialIdp#apple_team_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_id SocialIdp#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_secret SocialIdp#client_secret}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_action SocialIdp#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_assignment SocialIdp#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_attribute SocialIdp#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_filter SocialIdp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#id SocialIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#issuer_mode SocialIdp#issuer_mode}

---

##### `matchAttribute`<sup>Optional</sup> <a name="matchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchAttribute"></a>

```typescript
public readonly matchAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_attribute SocialIdp#match_attribute}.

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_type SocialIdp#match_type}.

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#max_clock_skew SocialIdp#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#profile_master SocialIdp#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#protocol_type SocialIdp#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#provisioning_action SocialIdp#provisioning_action}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#status SocialIdp#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_type SocialIdp#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#suspended_action SocialIdp#suspended_action}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#username_template SocialIdp#username_template}.

---



