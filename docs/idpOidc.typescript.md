# `okta_idp_oidc`

Refer to the Terraform Registory for docs: [`okta_idp_oidc`](https://www.terraform.io/docs/providers/okta/r/idp_oidc).

# `idpOidc` Submodule <a name="`idpOidc` Submodule" id="@cdktf/provider-okta.idpOidc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpOidc <a name="IdpOidc" id="@cdktf/provider-okta.idpOidc.IdpOidc"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc okta_idp_oidc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer"></a>

```typescript
import { idpOidc } from '@cdktf/provider-okta'

new idpOidc.IdpOidc(scope: Construct, id: string, config: IdpOidcConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig">IdpOidcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.idpOidc.IdpOidc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig">IdpOidcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm">resetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope">resetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding">resetUserInfoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl">resetUserInfoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idpOidc.IdpOidc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpOidc.IdpOidc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idpOidc.IdpOidc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkAction"></a>

```typescript
public resetAccountLinkAction(): void
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetAccountLinkGroupInclude"></a>

```typescript
public resetAccountLinkGroupInclude(): void
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetDeprovisionedAction"></a>

```typescript
public resetDeprovisionedAction(): void
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAction"></a>

```typescript
public resetGroupsAction(): void
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAssignment"></a>

```typescript
public resetGroupsAssignment(): void
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsAttribute"></a>

```typescript
public resetGroupsAttribute(): void
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetGroupsFilter"></a>

```typescript
public resetGroupsFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetIssuerMode"></a>

```typescript
public resetIssuerMode(): void
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetMaxClockSkew"></a>

```typescript
public resetMaxClockSkew(): void
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProfileMaster"></a>

```typescript
public resetProfileMaster(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetProvisioningAction"></a>

```typescript
public resetProvisioningAction(): void
```

##### `resetRequestSignatureAlgorithm` <a name="resetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureAlgorithm"></a>

```typescript
public resetRequestSignatureAlgorithm(): void
```

##### `resetRequestSignatureScope` <a name="resetRequestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetRequestSignatureScope"></a>

```typescript
public resetRequestSignatureScope(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchAttribute"></a>

```typescript
public resetSubjectMatchAttribute(): void
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSubjectMatchType"></a>

```typescript
public resetSubjectMatchType(): void
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetSuspendedAction"></a>

```typescript
public resetSuspendedAction(): void
```

##### `resetUserInfoBinding` <a name="resetUserInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoBinding"></a>

```typescript
public resetUserInfoBinding(): void
```

##### `resetUserInfoUrl` <a name="resetUserInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUserInfoUrl"></a>

```typescript
public resetUserInfoUrl(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct"></a>

```typescript
import { idpOidc } from '@cdktf/provider-okta'

idpOidc.IdpOidc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement"></a>

```typescript
import { idpOidc } from '@cdktf/provider-okta'

idpOidc.IdpOidc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource"></a>

```typescript
import { idpOidc } from '@cdktf/provider-okta'

idpOidc.IdpOidc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpOidc.IdpOidc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId">userTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput">authorizationBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput">groupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput">groupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput">issuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput">jwksBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput">jwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput">profileMasterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput">provisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput">requestSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput">requestSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput">suspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput">tokenBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput">userInfoBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput">userInfoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding">authorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction">groupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding">jwksBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope">requestSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding">tokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding">userInfoBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl">userInfoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userTypeId`<sup>Required</sup> <a name="userTypeId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userTypeId"></a>

```typescript
public readonly userTypeId: string;
```

- *Type:* string

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkActionInput"></a>

```typescript
public readonly accountLinkActionInput: string;
```

- *Type:* string

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupIncludeInput"></a>

```typescript
public readonly accountLinkGroupIncludeInput: string[];
```

- *Type:* string[]

---

##### `authorizationBindingInput`<sup>Optional</sup> <a name="authorizationBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBindingInput"></a>

```typescript
public readonly authorizationBindingInput: string;
```

- *Type:* string

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrlInput"></a>

```typescript
public readonly authorizationUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedActionInput"></a>

```typescript
public readonly deprovisionedActionInput: string;
```

- *Type:* string

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsActionInput"></a>

```typescript
public readonly groupsActionInput: string;
```

- *Type:* string

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignmentInput"></a>

```typescript
public readonly groupsAssignmentInput: string[];
```

- *Type:* string[]

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttributeInput"></a>

```typescript
public readonly groupsAttributeInput: string;
```

- *Type:* string

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilterInput"></a>

```typescript
public readonly groupsFilterInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerModeInput"></a>

```typescript
public readonly issuerModeInput: string;
```

- *Type:* string

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `jwksBindingInput`<sup>Optional</sup> <a name="jwksBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBindingInput"></a>

```typescript
public readonly jwksBindingInput: string;
```

- *Type:* string

---

##### `jwksUrlInput`<sup>Optional</sup> <a name="jwksUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrlInput"></a>

```typescript
public readonly jwksUrlInput: string;
```

- *Type:* string

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkewInput"></a>

```typescript
public readonly maxClockSkewInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMasterInput"></a>

```typescript
public readonly profileMasterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningActionInput"></a>

```typescript
public readonly provisioningActionInput: string;
```

- *Type:* string

---

##### `requestSignatureAlgorithmInput`<sup>Optional</sup> <a name="requestSignatureAlgorithmInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithmInput"></a>

```typescript
public readonly requestSignatureAlgorithmInput: string;
```

- *Type:* string

---

##### `requestSignatureScopeInput`<sup>Optional</sup> <a name="requestSignatureScopeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScopeInput"></a>

```typescript
public readonly requestSignatureScopeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttributeInput"></a>

```typescript
public readonly subjectMatchAttributeInput: string;
```

- *Type:* string

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchTypeInput"></a>

```typescript
public readonly subjectMatchTypeInput: string;
```

- *Type:* string

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedActionInput"></a>

```typescript
public readonly suspendedActionInput: string;
```

- *Type:* string

---

##### `tokenBindingInput`<sup>Optional</sup> <a name="tokenBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBindingInput"></a>

```typescript
public readonly tokenBindingInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `userInfoBindingInput`<sup>Optional</sup> <a name="userInfoBindingInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBindingInput"></a>

```typescript
public readonly userInfoBindingInput: string;
```

- *Type:* string

---

##### `userInfoUrlInput`<sup>Optional</sup> <a name="userInfoUrlInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrlInput"></a>

```typescript
public readonly userInfoUrlInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationBinding"></a>

```typescript
public readonly authorizationBinding: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksBinding"></a>

```typescript
public readonly jwksBinding: string;
```

- *Type:* string

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

---

##### `requestSignatureAlgorithm`<sup>Required</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureAlgorithm"></a>

```typescript
public readonly requestSignatureAlgorithm: string;
```

- *Type:* string

---

##### `requestSignatureScope`<sup>Required</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.requestSignatureScope"></a>

```typescript
public readonly requestSignatureScope: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenBinding"></a>

```typescript
public readonly tokenBinding: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `userInfoBinding`<sup>Required</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoBinding"></a>

```typescript
public readonly userInfoBinding: string;
```

- *Type:* string

---

##### `userInfoUrl`<sup>Required</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.userInfoUrl"></a>

```typescript
public readonly userInfoUrl: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpOidc.IdpOidc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpOidcConfig <a name="IdpOidcConfig" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.Initializer"></a>

```typescript
import { idpOidc } from '@cdktf/provider-okta'

const idpOidcConfig: idpOidc.IdpOidcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding">authorizationBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding">jwksBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name">name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding">tokenBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction">groupsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode">issuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>string</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope">requestSignatureScope</a></code> | <code>string</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding">userInfoBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl">userInfoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationBinding"></a>

```typescript
public readonly authorizationBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_binding IdpOidc#authorization_binding}.

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#authorization_url IdpOidc#authorization_url}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_id IdpOidc#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#client_secret IdpOidc#client_secret}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_url IdpOidc#issuer_url}.

---

##### `jwksBinding`<sup>Required</sup> <a name="jwksBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksBinding"></a>

```typescript
public readonly jwksBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_binding IdpOidc#jwks_binding}.

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#jwks_url IdpOidc#jwks_url}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#name IdpOidc#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#scopes IdpOidc#scopes}.

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenBinding"></a>

```typescript
public readonly tokenBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_binding IdpOidc#token_binding}.

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#token_url IdpOidc#token_url}.

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_action IdpOidc#account_link_action}.

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#account_link_group_include IdpOidc#account_link_group_include}.

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#deprovisioned_action IdpOidc#deprovisioned_action}.

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_action IdpOidc#groups_action}.

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_assignment IdpOidc#groups_assignment}.

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_attribute IdpOidc#groups_attribute}.

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#groups_filter IdpOidc#groups_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#id IdpOidc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#issuer_mode IdpOidc#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#max_clock_skew IdpOidc#max_clock_skew}.

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#profile_master IdpOidc#profile_master}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#protocol_type IdpOidc#protocol_type}.

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#provisioning_action IdpOidc#provisioning_action}.

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureAlgorithm"></a>

```typescript
public readonly requestSignatureAlgorithm: string;
```

- *Type:* string

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_algorithm IdpOidc#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.requestSignatureScope"></a>

```typescript
public readonly requestSignatureScope: string;
```

- *Type:* string

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#request_signature_scope IdpOidc#request_signature_scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#status IdpOidc#status}.

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_attribute IdpOidc#subject_match_attribute}.

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#subject_match_type IdpOidc#subject_match_type}.

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#suspended_action IdpOidc#suspended_action}.

---

##### `userInfoBinding`<sup>Optional</sup> <a name="userInfoBinding" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoBinding"></a>

```typescript
public readonly userInfoBinding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_binding IdpOidc#user_info_binding}.

---

##### `userInfoUrl`<sup>Optional</sup> <a name="userInfoUrl" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.userInfoUrl"></a>

```typescript
public readonly userInfoUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#user_info_url IdpOidc#user_info_url}.

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpOidc.IdpOidcConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_oidc#username_template IdpOidc#username_template}.

---



