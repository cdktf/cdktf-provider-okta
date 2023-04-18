# `okta_idp`

Refer to the Terraform Registory for docs: [`okta_idp`](https://www.terraform.io/docs/providers/okta/r/idp).

# `idp` Submodule <a name="`idp` Submodule" id="@cdktf/provider-okta.idp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Idp <a name="Idp" id="@cdktf/provider-okta.idp.Idp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/idp okta_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idp.Idp.Initializer"></a>

```typescript
import { idp } from '@cdktf/provider-okta'

new idp.Idp(scope: Construct, id: string, config: IdpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.idp.IdpConfig">IdpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idp.IdpConfig">IdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm">resetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope">resetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoBinding">resetUserInfoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoUrl">resetUserInfoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idp.Idp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idp.Idp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idp.Idp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idp.Idp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkAction"></a>

```typescript
public resetAccountLinkAction(): void
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude"></a>

```typescript
public resetAccountLinkGroupInclude(): void
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction"></a>

```typescript
public resetDeprovisionedAction(): void
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idp.Idp.resetGroupsAction"></a>

```typescript
public resetGroupsAction(): void
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idp.Idp.resetGroupsAssignment"></a>

```typescript
public resetGroupsAssignment(): void
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idp.Idp.resetGroupsAttribute"></a>

```typescript
public resetGroupsAttribute(): void
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idp.Idp.resetGroupsFilter"></a>

```typescript
public resetGroupsFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idp.Idp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idp.Idp.resetIssuerMode"></a>

```typescript
public resetIssuerMode(): void
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idp.Idp.resetMaxClockSkew"></a>

```typescript
public resetMaxClockSkew(): void
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idp.Idp.resetProfileMaster"></a>

```typescript
public resetProfileMaster(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.idp.Idp.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idp.Idp.resetProvisioningAction"></a>

```typescript
public resetProvisioningAction(): void
```

##### `resetRequestSignatureAlgorithm` <a name="resetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm"></a>

```typescript
public resetRequestSignatureAlgorithm(): void
```

##### `resetRequestSignatureScope` <a name="resetRequestSignatureScope" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope"></a>

```typescript
public resetRequestSignatureScope(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idp.Idp.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute"></a>

```typescript
public resetSubjectMatchAttribute(): void
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchType"></a>

```typescript
public resetSubjectMatchType(): void
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idp.Idp.resetSuspendedAction"></a>

```typescript
public resetSuspendedAction(): void
```

##### `resetUserInfoBinding` <a name="resetUserInfoBinding" id="@cdktf/provider-okta.idp.Idp.resetUserInfoBinding"></a>

```typescript
public resetUserInfoBinding(): void
```

##### `resetUserInfoUrl` <a name="resetUserInfoUrl" id="@cdktf/provider-okta.idp.Idp.resetUserInfoUrl"></a>

```typescript
public resetUserInfoUrl(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idp.Idp.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idp.Idp.isConstruct"></a>

```typescript
import { idp } from '@cdktf/provider-okta'

idp.Idp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idp.Idp.isTerraformElement"></a>

```typescript
import { idp } from '@cdktf/provider-okta'

idp.Idp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idp.Idp.isTerraformResource"></a>

```typescript
import { idp } from '@cdktf/provider-okta'

idp.Idp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idp.Idp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userTypeId">userTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput">authorizationBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsActionInput">groupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilterInput">groupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerModeInput">issuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBindingInput">jwksBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrlInput">jwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMasterInput">profileMasterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningActionInput">provisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput">requestSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput">requestSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedActionInput">suspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBindingInput">tokenBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput">userInfoBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput">userInfoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBinding">authorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAction">groupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBinding">jwksBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScope">requestSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBinding">tokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBinding">userInfoBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrl">userInfoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idp.Idp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idp.Idp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idp.Idp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idp.Idp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.Idp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.Idp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idp.Idp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idp.Idp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.Idp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.Idp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.Idp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idp.Idp.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userTypeId`<sup>Required</sup> <a name="userTypeId" id="@cdktf/provider-okta.idp.Idp.property.userTypeId"></a>

```typescript
public readonly userTypeId: string;
```

- *Type:* string

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput"></a>

```typescript
public readonly accountLinkActionInput: string;
```

- *Type:* string

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput"></a>

```typescript
public readonly accountLinkGroupIncludeInput: string[];
```

- *Type:* string[]

---

##### `authorizationBindingInput`<sup>Optional</sup> <a name="authorizationBindingInput" id="@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput"></a>

```typescript
public readonly authorizationBindingInput: string;
```

- *Type:* string

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput"></a>

```typescript
public readonly authorizationUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.idp.Idp.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.idp.Idp.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput"></a>

```typescript
public readonly deprovisionedActionInput: string;
```

- *Type:* string

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idp.Idp.property.groupsActionInput"></a>

```typescript
public readonly groupsActionInput: string;
```

- *Type:* string

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput"></a>

```typescript
public readonly groupsAssignmentInput: string[];
```

- *Type:* string[]

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput"></a>

```typescript
public readonly groupsAttributeInput: string;
```

- *Type:* string

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idp.Idp.property.groupsFilterInput"></a>

```typescript
public readonly groupsFilterInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idp.Idp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idp.Idp.property.issuerModeInput"></a>

```typescript
public readonly issuerModeInput: string;
```

- *Type:* string

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-okta.idp.Idp.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `jwksBindingInput`<sup>Optional</sup> <a name="jwksBindingInput" id="@cdktf/provider-okta.idp.Idp.property.jwksBindingInput"></a>

```typescript
public readonly jwksBindingInput: string;
```

- *Type:* string

---

##### `jwksUrlInput`<sup>Optional</sup> <a name="jwksUrlInput" id="@cdktf/provider-okta.idp.Idp.property.jwksUrlInput"></a>

```typescript
public readonly jwksUrlInput: string;
```

- *Type:* string

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput"></a>

```typescript
public readonly maxClockSkewInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idp.Idp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idp.Idp.property.profileMasterInput"></a>

```typescript
public readonly profileMasterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.idp.Idp.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idp.Idp.property.provisioningActionInput"></a>

```typescript
public readonly provisioningActionInput: string;
```

- *Type:* string

---

##### `requestSignatureAlgorithmInput`<sup>Optional</sup> <a name="requestSignatureAlgorithmInput" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput"></a>

```typescript
public readonly requestSignatureAlgorithmInput: string;
```

- *Type:* string

---

##### `requestSignatureScopeInput`<sup>Optional</sup> <a name="requestSignatureScopeInput" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput"></a>

```typescript
public readonly requestSignatureScopeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.idp.Idp.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idp.Idp.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput"></a>

```typescript
public readonly subjectMatchAttributeInput: string;
```

- *Type:* string

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput"></a>

```typescript
public readonly subjectMatchTypeInput: string;
```

- *Type:* string

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idp.Idp.property.suspendedActionInput"></a>

```typescript
public readonly suspendedActionInput: string;
```

- *Type:* string

---

##### `tokenBindingInput`<sup>Optional</sup> <a name="tokenBindingInput" id="@cdktf/provider-okta.idp.Idp.property.tokenBindingInput"></a>

```typescript
public readonly tokenBindingInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-okta.idp.Idp.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `userInfoBindingInput`<sup>Optional</sup> <a name="userInfoBindingInput" id="@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput"></a>

```typescript
public readonly userInfoBindingInput: string;
```

- *Type:* string

---

##### `userInfoUrlInput`<sup>Optional</sup> <a name="userInfoUrlInput" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput"></a>

```typescript
public readonly userInfoUrlInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idp.Idp.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idp.Idp.property.authorizationBinding"></a>

```typescript
public readonly authorizationBinding: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idp.Idp.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idp.Idp.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idp.Idp.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idp.Idp.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idp.Idp.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idp.Idp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idp.Idp.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idp.Idp.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idp.Idp.property.jwksBinding"></a>

```typescript
public readonly jwksBinding: string;
```

- *Type:* string

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idp.Idp.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.Idp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idp.Idp.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.idp.Idp.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idp.Idp.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

---

##### `requestSignatureAlgorithm`<sup>Required</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm"></a>

```typescript
public readonly requestSignatureAlgorithm: string;
```

- *Type:* string

---

##### `requestSignatureScope`<sup>Required</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScope"></a>

```typescript
public readonly requestSignatureScope: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.Idp.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idp.Idp.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idp.Idp.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idp.Idp.property.tokenBinding"></a>

```typescript
public readonly tokenBinding: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idp.Idp.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `userInfoBinding`<sup>Required</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idp.Idp.property.userInfoBinding"></a>

```typescript
public readonly userInfoBinding: string;
```

- *Type:* string

---

##### `userInfoUrl`<sup>Required</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrl"></a>

```typescript
public readonly userInfoUrl: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idp.Idp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpConfig <a name="IdpConfig" id="@cdktf/provider-okta.idp.IdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idp.IdpConfig.Initializer"></a>

```typescript
import { idp } from '@cdktf/provider-okta'

const idpConfig: idp.IdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding">authorizationBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding">jwksBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.name">name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding">tokenBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAction">groupsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerMode">issuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>string</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope">requestSignatureScope</a></code> | <code>string</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding">userInfoBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl">userInfoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idp.IdpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idp.IdpConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idp.IdpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idp.IdpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idp.IdpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idp.IdpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding"></a>

```typescript
public readonly authorizationBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}.

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idp.IdpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idp.IdpConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}.

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding"></a>

```typescript
public readonly jwksBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}.

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idp.IdpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#name Idp#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idp.IdpConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}.

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding"></a>

```typescript
public readonly tokenBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}.

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idp.IdpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_mode Idp#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idp.IdpConfig.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idp.IdpConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm"></a>

```typescript
public readonly requestSignatureAlgorithm: string;
```

- *Type:* string

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_algorithm Idp#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope"></a>

```typescript
public readonly requestSignatureScope: string;
```

- *Type:* string

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_scope Idp#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idp.IdpConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}.

---

##### `userInfoBinding`<sup>Optional</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding"></a>

```typescript
public readonly userInfoBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}.

---

##### `userInfoUrl`<sup>Optional</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl"></a>

```typescript
public readonly userInfoUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}.

---



