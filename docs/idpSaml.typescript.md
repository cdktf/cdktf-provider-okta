# `idpSaml` Submodule <a name="`idpSaml` Submodule" id="@cdktf/provider-okta.idpSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSaml <a name="IdpSaml" id="@cdktf/provider-okta.idpSaml.IdpSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml okta_idp_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer"></a>

```typescript
import { idpSaml } from '@cdktf/provider-okta'

new idpSaml.IdpSaml(scope: Construct, id: string, config: IdpSamlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig">IdpSamlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.idpSaml.IdpSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig">IdpSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction">resetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude">resetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType">resetAcsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction">resetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction">resetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment">resetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter">resetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew">resetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat">resetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster">resetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction">resetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm">resetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope">resetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm">resetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope">resetResponseSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding">resetSsoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination">resetSsoDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter">resetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat">resetSubjectFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute">resetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType">resetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction">resetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.idpSaml.IdpSaml.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSaml.IdpSaml.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.idpSaml.IdpSaml.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.idpSaml.IdpSaml.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpSaml.IdpSaml.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.idpSaml.IdpSaml.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountLinkAction` <a name="resetAccountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkAction"></a>

```typescript
public resetAccountLinkAction(): void
```

##### `resetAccountLinkGroupInclude` <a name="resetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAccountLinkGroupInclude"></a>

```typescript
public resetAccountLinkGroupInclude(): void
```

##### `resetAcsType` <a name="resetAcsType" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetAcsType"></a>

```typescript
public resetAcsType(): void
```

##### `resetDeprovisionedAction` <a name="resetDeprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetDeprovisionedAction"></a>

```typescript
public resetDeprovisionedAction(): void
```

##### `resetGroupsAction` <a name="resetGroupsAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAction"></a>

```typescript
public resetGroupsAction(): void
```

##### `resetGroupsAssignment` <a name="resetGroupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAssignment"></a>

```typescript
public resetGroupsAssignment(): void
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsAttribute"></a>

```typescript
public resetGroupsAttribute(): void
```

##### `resetGroupsFilter` <a name="resetGroupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetGroupsFilter"></a>

```typescript
public resetGroupsFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetIssuerMode"></a>

```typescript
public resetIssuerMode(): void
```

##### `resetMaxClockSkew` <a name="resetMaxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetMaxClockSkew"></a>

```typescript
public resetMaxClockSkew(): void
```

##### `resetNameFormat` <a name="resetNameFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetNameFormat"></a>

```typescript
public resetNameFormat(): void
```

##### `resetProfileMaster` <a name="resetProfileMaster" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProfileMaster"></a>

```typescript
public resetProfileMaster(): void
```

##### `resetProvisioningAction` <a name="resetProvisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetProvisioningAction"></a>

```typescript
public resetProvisioningAction(): void
```

##### `resetRequestSignatureAlgorithm` <a name="resetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureAlgorithm"></a>

```typescript
public resetRequestSignatureAlgorithm(): void
```

##### `resetRequestSignatureScope` <a name="resetRequestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetRequestSignatureScope"></a>

```typescript
public resetRequestSignatureScope(): void
```

##### `resetResponseSignatureAlgorithm` <a name="resetResponseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureAlgorithm"></a>

```typescript
public resetResponseSignatureAlgorithm(): void
```

##### `resetResponseSignatureScope` <a name="resetResponseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetResponseSignatureScope"></a>

```typescript
public resetResponseSignatureScope(): void
```

##### `resetSsoBinding` <a name="resetSsoBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoBinding"></a>

```typescript
public resetSsoBinding(): void
```

##### `resetSsoDestination` <a name="resetSsoDestination" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSsoDestination"></a>

```typescript
public resetSsoDestination(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubjectFilter` <a name="resetSubjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFilter"></a>

```typescript
public resetSubjectFilter(): void
```

##### `resetSubjectFormat` <a name="resetSubjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectFormat"></a>

```typescript
public resetSubjectFormat(): void
```

##### `resetSubjectMatchAttribute` <a name="resetSubjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchAttribute"></a>

```typescript
public resetSubjectMatchAttribute(): void
```

##### `resetSubjectMatchType` <a name="resetSubjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSubjectMatchType"></a>

```typescript
public resetSubjectMatchType(): void
```

##### `resetSuspendedAction` <a name="resetSuspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetSuspendedAction"></a>

```typescript
public resetSuspendedAction(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSaml.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct"></a>

```typescript
import { idpSaml } from '@cdktf/provider-okta'

idpSaml.IdpSaml.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement"></a>

```typescript
import { idpSaml } from '@cdktf/provider-okta'

idpSaml.IdpSaml.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource"></a>

```typescript
import { idpSaml } from '@cdktf/provider-okta'

idpSaml.IdpSaml.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSaml.IdpSaml.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport"></a>

```typescript
import { idpSaml } from '@cdktf/provider-okta'

idpSaml.IdpSaml.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdpSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdpSaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdpSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdpSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding">acsBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId">userTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput">accountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput">accountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput">acsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput">deprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput">groupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput">groupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput">groupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput">issuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput">kidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput">maxClockSkewInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput">nameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput">profileMasterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput">provisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput">requestSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput">requestSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput">responseSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput">responseSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput">ssoBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput">ssoDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput">ssoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput">subjectFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput">subjectFormatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput">subjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput">subjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput">suspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType">acsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction">groupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode">issuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat">nameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope">requestSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope">responseSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding">ssoBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination">ssoDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter">subjectFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat">subjectFormat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acsBinding`<sup>Required</sup> <a name="acsBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsBinding"></a>

```typescript
public readonly acsBinding: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userTypeId`<sup>Required</sup> <a name="userTypeId" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.userTypeId"></a>

```typescript
public readonly userTypeId: string;
```

- *Type:* string

---

##### `accountLinkActionInput`<sup>Optional</sup> <a name="accountLinkActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkActionInput"></a>

```typescript
public readonly accountLinkActionInput: string;
```

- *Type:* string

---

##### `accountLinkGroupIncludeInput`<sup>Optional</sup> <a name="accountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupIncludeInput"></a>

```typescript
public readonly accountLinkGroupIncludeInput: string[];
```

- *Type:* string[]

---

##### `acsTypeInput`<sup>Optional</sup> <a name="acsTypeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsTypeInput"></a>

```typescript
public readonly acsTypeInput: string;
```

- *Type:* string

---

##### `deprovisionedActionInput`<sup>Optional</sup> <a name="deprovisionedActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedActionInput"></a>

```typescript
public readonly deprovisionedActionInput: string;
```

- *Type:* string

---

##### `groupsActionInput`<sup>Optional</sup> <a name="groupsActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsActionInput"></a>

```typescript
public readonly groupsActionInput: string;
```

- *Type:* string

---

##### `groupsAssignmentInput`<sup>Optional</sup> <a name="groupsAssignmentInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignmentInput"></a>

```typescript
public readonly groupsAssignmentInput: string[];
```

- *Type:* string[]

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttributeInput"></a>

```typescript
public readonly groupsAttributeInput: string;
```

- *Type:* string

---

##### `groupsFilterInput`<sup>Optional</sup> <a name="groupsFilterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilterInput"></a>

```typescript
public readonly groupsFilterInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerModeInput"></a>

```typescript
public readonly issuerModeInput: string;
```

- *Type:* string

---

##### `kidInput`<sup>Optional</sup> <a name="kidInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kidInput"></a>

```typescript
public readonly kidInput: string;
```

- *Type:* string

---

##### `maxClockSkewInput`<sup>Optional</sup> <a name="maxClockSkewInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkewInput"></a>

```typescript
public readonly maxClockSkewInput: number;
```

- *Type:* number

---

##### `nameFormatInput`<sup>Optional</sup> <a name="nameFormatInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormatInput"></a>

```typescript
public readonly nameFormatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileMasterInput`<sup>Optional</sup> <a name="profileMasterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMasterInput"></a>

```typescript
public readonly profileMasterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningActionInput`<sup>Optional</sup> <a name="provisioningActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningActionInput"></a>

```typescript
public readonly provisioningActionInput: string;
```

- *Type:* string

---

##### `requestSignatureAlgorithmInput`<sup>Optional</sup> <a name="requestSignatureAlgorithmInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithmInput"></a>

```typescript
public readonly requestSignatureAlgorithmInput: string;
```

- *Type:* string

---

##### `requestSignatureScopeInput`<sup>Optional</sup> <a name="requestSignatureScopeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScopeInput"></a>

```typescript
public readonly requestSignatureScopeInput: string;
```

- *Type:* string

---

##### `responseSignatureAlgorithmInput`<sup>Optional</sup> <a name="responseSignatureAlgorithmInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithmInput"></a>

```typescript
public readonly responseSignatureAlgorithmInput: string;
```

- *Type:* string

---

##### `responseSignatureScopeInput`<sup>Optional</sup> <a name="responseSignatureScopeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScopeInput"></a>

```typescript
public readonly responseSignatureScopeInput: string;
```

- *Type:* string

---

##### `ssoBindingInput`<sup>Optional</sup> <a name="ssoBindingInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBindingInput"></a>

```typescript
public readonly ssoBindingInput: string;
```

- *Type:* string

---

##### `ssoDestinationInput`<sup>Optional</sup> <a name="ssoDestinationInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestinationInput"></a>

```typescript
public readonly ssoDestinationInput: string;
```

- *Type:* string

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrlInput"></a>

```typescript
public readonly ssoUrlInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subjectFilterInput`<sup>Optional</sup> <a name="subjectFilterInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilterInput"></a>

```typescript
public readonly subjectFilterInput: string;
```

- *Type:* string

---

##### `subjectFormatInput`<sup>Optional</sup> <a name="subjectFormatInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormatInput"></a>

```typescript
public readonly subjectFormatInput: string[];
```

- *Type:* string[]

---

##### `subjectMatchAttributeInput`<sup>Optional</sup> <a name="subjectMatchAttributeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttributeInput"></a>

```typescript
public readonly subjectMatchAttributeInput: string;
```

- *Type:* string

---

##### `subjectMatchTypeInput`<sup>Optional</sup> <a name="subjectMatchTypeInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchTypeInput"></a>

```typescript
public readonly subjectMatchTypeInput: string;
```

- *Type:* string

---

##### `suspendedActionInput`<sup>Optional</sup> <a name="suspendedActionInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedActionInput"></a>

```typescript
public readonly suspendedActionInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

---

##### `acsType`<sup>Required</sup> <a name="acsType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.acsType"></a>

```typescript
public readonly acsType: string;
```

- *Type:* string

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameFormat`<sup>Required</sup> <a name="nameFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.nameFormat"></a>

```typescript
public readonly nameFormat: string;
```

- *Type:* string

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

---

##### `requestSignatureAlgorithm`<sup>Required</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureAlgorithm"></a>

```typescript
public readonly requestSignatureAlgorithm: string;
```

- *Type:* string

---

##### `requestSignatureScope`<sup>Required</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.requestSignatureScope"></a>

```typescript
public readonly requestSignatureScope: string;
```

- *Type:* string

---

##### `responseSignatureAlgorithm`<sup>Required</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureAlgorithm"></a>

```typescript
public readonly responseSignatureAlgorithm: string;
```

- *Type:* string

---

##### `responseSignatureScope`<sup>Required</sup> <a name="responseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.responseSignatureScope"></a>

```typescript
public readonly responseSignatureScope: string;
```

- *Type:* string

---

##### `ssoBinding`<sup>Required</sup> <a name="ssoBinding" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoBinding"></a>

```typescript
public readonly ssoBinding: string;
```

- *Type:* string

---

##### `ssoDestination`<sup>Required</sup> <a name="ssoDestination" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoDestination"></a>

```typescript
public readonly ssoDestination: string;
```

- *Type:* string

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subjectFilter`<sup>Required</sup> <a name="subjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFilter"></a>

```typescript
public readonly subjectFilter: string;
```

- *Type:* string

---

##### `subjectFormat`<sup>Required</sup> <a name="subjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectFormat"></a>

```typescript
public readonly subjectFormat: string[];
```

- *Type:* string[]

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.idpSaml.IdpSaml.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSamlConfig <a name="IdpSamlConfig" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.Initializer"></a>

```typescript
import { idpSaml } from '@cdktf/provider-okta'

const idpSamlConfig: idpSaml.IdpSamlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer">issuer</a></code> | <code>string</code> | URI that identifies the issuer. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid">kid</a></code> | <code>string</code> | The ID of the signing key. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name">name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | URL of binding-specific endpoint to send an AuthnRequest message to IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction">accountLinkAction</a></code> | <code>string</code> | Specifies the account linking action for an IdP user. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>string[]</code> | Group memberships to determine link candidates. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType">acsType</a></code> | <code>string</code> | The type of ACS. It can be `INSTANCE` or `ORG`. Default: `INSTANCE`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction">deprovisionedAction</a></code> | <code>string</code> | Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction">groupsAction</a></code> | <code>string</code> | Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment">groupsAssignment</a></code> | <code>string[]</code> | List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>string</code> | IdP user profile attribute name (case-insensitive) for an array value that contains group memberships. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter">groupsFilter</a></code> | <code>string[]</code> | Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#id IdpSaml#id}. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode">issuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew">maxClockSkew</a></code> | <code>number</code> | Maximum allowable clock-skew when processing messages from the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat">nameFormat</a></code> | <code>string</code> | The name identifier format to use. By default `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster">profileMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the IdP should act as a source of truth for user profile attributes. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction">provisioningAction</a></code> | <code>string</code> | Provisioning action for an IdP user during authentication. Default: `AUTO`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm">requestSignatureAlgorithm</a></code> | <code>string</code> | The XML digital Signature Algorithm used when signing an `AuthnRequest` message. It can be `SHA-256` or `SHA-1`. Default: `SHA-256`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope">requestSignatureScope</a></code> | <code>string</code> | Specifies whether to digitally sign an AuthnRequest messages to the IdP. It can be `REQUEST` or `NONE`. Default: `REQUEST`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm">responseSignatureAlgorithm</a></code> | <code>string</code> | The minimum XML digital signature algorithm allowed when verifying a `SAMLResponse` message or Assertion element. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope">responseSignatureScope</a></code> | <code>string</code> | Specifies whether to verify a `SAMLResponse` message or Assertion element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding">ssoBinding</a></code> | <code>string</code> | The method of making an SSO request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. Default: `HTTP-POST`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination">ssoDestination</a></code> | <code>string</code> | URI reference indicating the address to which the AuthnRequest message is sent. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status">status</a></code> | <code>string</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter">subjectFilter</a></code> | <code>string</code> | Optional regular expression pattern used to filter untrusted IdP usernames. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat">subjectFormat</a></code> | <code>string[]</code> | The name format. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>string</code> | Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType">subjectMatchType</a></code> | <code>string</code> | Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction">suspendedAction</a></code> | <code>string</code> | Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`. |
| <code><a href="#@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

URI that identifies the issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#issuer IdpSaml#issuer}

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

The ID of the signing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#kid IdpSaml#kid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#name IdpSaml#name}

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

URL of binding-specific endpoint to send an AuthnRequest message to IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#sso_url IdpSaml#sso_url}

---

##### `accountLinkAction`<sup>Optional</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkAction"></a>

```typescript
public readonly accountLinkAction: string;
```

- *Type:* string

Specifies the account linking action for an IdP user. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#account_link_action IdpSaml#account_link_action}

---

##### `accountLinkGroupInclude`<sup>Optional</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.accountLinkGroupInclude"></a>

```typescript
public readonly accountLinkGroupInclude: string[];
```

- *Type:* string[]

Group memberships to determine link candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#account_link_group_include IdpSaml#account_link_group_include}

---

##### `acsType`<sup>Optional</sup> <a name="acsType" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.acsType"></a>

```typescript
public readonly acsType: string;
```

- *Type:* string

The type of ACS. It can be `INSTANCE` or `ORG`. Default: `INSTANCE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#acs_type IdpSaml#acs_type}

---

##### `deprovisionedAction`<sup>Optional</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.deprovisionedAction"></a>

```typescript
public readonly deprovisionedAction: string;
```

- *Type:* string

Action for a previously deprovisioned IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#deprovisioned_action IdpSaml#deprovisioned_action}

---

##### `groupsAction`<sup>Optional</sup> <a name="groupsAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAction"></a>

```typescript
public readonly groupsAction: string;
```

- *Type:* string

Provisioning action for IdP user's group memberships. It can be `NONE`, `SYNC`, `APPEND`, or `ASSIGN`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#groups_action IdpSaml#groups_action}

---

##### `groupsAssignment`<sup>Optional</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAssignment"></a>

```typescript
public readonly groupsAssignment: string[];
```

- *Type:* string[]

List of Okta Group IDs to add an IdP user as a member with the `ASSIGN` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#groups_assignment IdpSaml#groups_assignment}

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsAttribute"></a>

```typescript
public readonly groupsAttribute: string;
```

- *Type:* string

IdP user profile attribute name (case-insensitive) for an array value that contains group memberships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#groups_attribute IdpSaml#groups_attribute}

---

##### `groupsFilter`<sup>Optional</sup> <a name="groupsFilter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.groupsFilter"></a>

```typescript
public readonly groupsFilter: string[];
```

- *Type:* string[]

Whitelist of Okta Group identifiers that are allowed for the `APPEND` or `SYNC` `groups_action`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#groups_filter IdpSaml#groups_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#id IdpSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.issuerMode"></a>

```typescript
public readonly issuerMode: string;
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#issuer_mode IdpSaml#issuer_mode}

---

##### `maxClockSkew`<sup>Optional</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.maxClockSkew"></a>

```typescript
public readonly maxClockSkew: number;
```

- *Type:* number

Maximum allowable clock-skew when processing messages from the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#max_clock_skew IdpSaml#max_clock_skew}

---

##### `nameFormat`<sup>Optional</sup> <a name="nameFormat" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.nameFormat"></a>

```typescript
public readonly nameFormat: string;
```

- *Type:* string

The name identifier format to use. By default `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#name_format IdpSaml#name_format}

---

##### `profileMaster`<sup>Optional</sup> <a name="profileMaster" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.profileMaster"></a>

```typescript
public readonly profileMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the IdP should act as a source of truth for user profile attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#profile_master IdpSaml#profile_master}

---

##### `provisioningAction`<sup>Optional</sup> <a name="provisioningAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.provisioningAction"></a>

```typescript
public readonly provisioningAction: string;
```

- *Type:* string

Provisioning action for an IdP user during authentication. Default: `AUTO`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#provisioning_action IdpSaml#provisioning_action}

---

##### `requestSignatureAlgorithm`<sup>Optional</sup> <a name="requestSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureAlgorithm"></a>

```typescript
public readonly requestSignatureAlgorithm: string;
```

- *Type:* string

The XML digital Signature Algorithm used when signing an `AuthnRequest` message. It can be `SHA-256` or `SHA-1`. Default: `SHA-256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#request_signature_algorithm IdpSaml#request_signature_algorithm}

---

##### `requestSignatureScope`<sup>Optional</sup> <a name="requestSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.requestSignatureScope"></a>

```typescript
public readonly requestSignatureScope: string;
```

- *Type:* string

Specifies whether to digitally sign an AuthnRequest messages to the IdP. It can be `REQUEST` or `NONE`. Default: `REQUEST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#request_signature_scope IdpSaml#request_signature_scope}

---

##### `responseSignatureAlgorithm`<sup>Optional</sup> <a name="responseSignatureAlgorithm" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureAlgorithm"></a>

```typescript
public readonly responseSignatureAlgorithm: string;
```

- *Type:* string

The minimum XML digital signature algorithm allowed when verifying a `SAMLResponse` message or Assertion element.

It can be `SHA-256` or `SHA-1`. Default: `SHA-256`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#response_signature_algorithm IdpSaml#response_signature_algorithm}

---

##### `responseSignatureScope`<sup>Optional</sup> <a name="responseSignatureScope" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.responseSignatureScope"></a>

```typescript
public readonly responseSignatureScope: string;
```

- *Type:* string

Specifies whether to verify a `SAMLResponse` message or Assertion element XML digital signature.

It can be `RESPONSE`, `ASSERTION`, or `ANY`. Default: `ANY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#response_signature_scope IdpSaml#response_signature_scope}

---

##### `ssoBinding`<sup>Optional</sup> <a name="ssoBinding" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoBinding"></a>

```typescript
public readonly ssoBinding: string;
```

- *Type:* string

The method of making an SSO request. It can be set to `HTTP-POST` or `HTTP-REDIRECT`. Default: `HTTP-POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#sso_binding IdpSaml#sso_binding}

---

##### `ssoDestination`<sup>Optional</sup> <a name="ssoDestination" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.ssoDestination"></a>

```typescript
public readonly ssoDestination: string;
```

- *Type:* string

URI reference indicating the address to which the AuthnRequest message is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#sso_destination IdpSaml#sso_destination}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#status IdpSaml#status}

---

##### `subjectFilter`<sup>Optional</sup> <a name="subjectFilter" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFilter"></a>

```typescript
public readonly subjectFilter: string;
```

- *Type:* string

Optional regular expression pattern used to filter untrusted IdP usernames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#subject_filter IdpSaml#subject_filter}

---

##### `subjectFormat`<sup>Optional</sup> <a name="subjectFormat" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectFormat"></a>

```typescript
public readonly subjectFormat: string[];
```

- *Type:* string[]

The name format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#subject_format IdpSaml#subject_format}

---

##### `subjectMatchAttribute`<sup>Optional</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchAttribute"></a>

```typescript
public readonly subjectMatchAttribute: string;
```

- *Type:* string

Okta user profile attribute for matching transformed IdP username. Only for matchType `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#subject_match_attribute IdpSaml#subject_match_attribute}

---

##### `subjectMatchType`<sup>Optional</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.subjectMatchType"></a>

```typescript
public readonly subjectMatchType: string;
```

- *Type:* string

Determines the Okta user profile attribute match conditions for account linking and authentication of the transformed IdP username.

By default, it is set to `USERNAME`. It can be set to `USERNAME`, `EMAIL`, `USERNAME_OR_EMAIL` or `CUSTOM_ATTRIBUTE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#subject_match_type IdpSaml#subject_match_type}

---

##### `suspendedAction`<sup>Optional</sup> <a name="suspendedAction" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.suspendedAction"></a>

```typescript
public readonly suspendedAction: string;
```

- *Type:* string

Action for a previously suspended IdP user during authentication. Can be `NONE` or `REACTIVATE`. Default: `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#suspended_action IdpSaml#suspended_action}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.idpSaml.IdpSamlConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Okta EL Expression to generate or transform a unique username for the IdP user. Default: `idpuser.email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/idp_saml#username_template IdpSaml#username_template}

---



