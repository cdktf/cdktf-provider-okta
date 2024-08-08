# `orgConfiguration` Submodule <a name="`orgConfiguration` Submodule" id="@cdktf/provider-okta.orgConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgConfiguration <a name="OrgConfiguration" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration okta_org_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer"></a>

```typescript
import { orgConfiguration } from '@cdktf/provider-okta'

new orgConfiguration.OrgConfiguration(scope: Construct, id: string, config: OrgConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig">OrgConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig">OrgConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser">resetBillingContactUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl">resetEndUserSupportHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails">resetOptOutCommunicationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber">resetSupportPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser">resetTechnicalContactUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAddress1` <a name="resetAddress1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress1"></a>

```typescript
public resetAddress1(): void
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetAddress2"></a>

```typescript
public resetAddress2(): void
```

##### `resetBillingContactUser` <a name="resetBillingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetBillingContactUser"></a>

```typescript
public resetBillingContactUser(): void
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetEndUserSupportHelpUrl` <a name="resetEndUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetEndUserSupportHelpUrl"></a>

```typescript
public resetEndUserSupportHelpUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetLogo"></a>

```typescript
public resetLogo(): void
```

##### `resetOptOutCommunicationEmails` <a name="resetOptOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetOptOutCommunicationEmails"></a>

```typescript
public resetOptOutCommunicationEmails(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSupportPhoneNumber` <a name="resetSupportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetSupportPhoneNumber"></a>

```typescript
public resetSupportPhoneNumber(): void
```

##### `resetTechnicalContactUser` <a name="resetTechnicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetTechnicalContactUser"></a>

```typescript
public resetTechnicalContactUser(): void
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrgConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct"></a>

```typescript
import { orgConfiguration } from '@cdktf/provider-okta'

orgConfiguration.OrgConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement"></a>

```typescript
import { orgConfiguration } from '@cdktf/provider-okta'

orgConfiguration.OrgConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource"></a>

```typescript
import { orgConfiguration } from '@cdktf/provider-okta'

orgConfiguration.OrgConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport"></a>

```typescript
import { orgConfiguration } from '@cdktf/provider-okta'

orgConfiguration.OrgConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrgConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrgConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrgConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrgConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input">address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input">address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput">billingContactUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput">endUserSupportHelpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput">logoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput">optOutCommunicationEmailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput">supportPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput">technicalContactUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput">websiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser">billingContactUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl">endUserSupportHelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo">logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails">optOutCommunicationEmails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber">supportPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser">technicalContactUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website">website</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1Input"></a>

```typescript
public readonly address1Input: string;
```

- *Type:* string

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2Input"></a>

```typescript
public readonly address2Input: string;
```

- *Type:* string

---

##### `billingContactUserInput`<sup>Optional</sup> <a name="billingContactUserInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUserInput"></a>

```typescript
public readonly billingContactUserInput: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `endUserSupportHelpUrlInput`<sup>Optional</sup> <a name="endUserSupportHelpUrlInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrlInput"></a>

```typescript
public readonly endUserSupportHelpUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logoInput"></a>

```typescript
public readonly logoInput: string;
```

- *Type:* string

---

##### `optOutCommunicationEmailsInput`<sup>Optional</sup> <a name="optOutCommunicationEmailsInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmailsInput"></a>

```typescript
public readonly optOutCommunicationEmailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `supportPhoneNumberInput`<sup>Optional</sup> <a name="supportPhoneNumberInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumberInput"></a>

```typescript
public readonly supportPhoneNumberInput: string;
```

- *Type:* string

---

##### `technicalContactUserInput`<sup>Optional</sup> <a name="technicalContactUserInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUserInput"></a>

```typescript
public readonly technicalContactUserInput: string;
```

- *Type:* string

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.websiteInput"></a>

```typescript
public readonly websiteInput: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `billingContactUser`<sup>Required</sup> <a name="billingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.billingContactUser"></a>

```typescript
public readonly billingContactUser: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `endUserSupportHelpUrl`<sup>Required</sup> <a name="endUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.endUserSupportHelpUrl"></a>

```typescript
public readonly endUserSupportHelpUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

---

##### `optOutCommunicationEmails`<sup>Required</sup> <a name="optOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.optOutCommunicationEmails"></a>

```typescript
public readonly optOutCommunicationEmails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportPhoneNumber`<sup>Required</sup> <a name="supportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.supportPhoneNumber"></a>

```typescript
public readonly supportPhoneNumber: string;
```

- *Type:* string

---

##### `technicalContactUser`<sup>Required</sup> <a name="technicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.technicalContactUser"></a>

```typescript
public readonly technicalContactUser: string;
```

- *Type:* string

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.website"></a>

```typescript
public readonly website: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.orgConfiguration.OrgConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgConfigurationConfig <a name="OrgConfigurationConfig" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.Initializer"></a>

```typescript
import { orgConfiguration } from '@cdktf/provider-okta'

const orgConfigurationConfig: orgConfiguration.OrgConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName">companyName</a></code> | <code>string</code> | Name of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1">address1</a></code> | <code>string</code> | Primary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2">address2</a></code> | <code>string</code> | Secondary address of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser">billingContactUser</a></code> | <code>string</code> | User ID representing the billing contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city">city</a></code> | <code>string</code> | City of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country">country</a></code> | <code>string</code> | Country of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl">endUserSupportHelpUrl</a></code> | <code>string</code> | Support link of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#id OrgConfiguration#id}. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo">logo</a></code> | <code>string</code> | Logo of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails">optOutCommunicationEmails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the org's users receive Okta Communication emails. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode">postalCode</a></code> | <code>string</code> | Postal code of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state">state</a></code> | <code>string</code> | State of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber">supportPhoneNumber</a></code> | <code>string</code> | Support help phone of org. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser">technicalContactUser</a></code> | <code>string</code> | User ID representing the technical contact. |
| <code><a href="#@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website">website</a></code> | <code>string</code> | The org's website. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

Name of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#company_name OrgConfiguration#company_name}

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

Primary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#address_1 OrgConfiguration#address_1}

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

Secondary address of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#address_2 OrgConfiguration#address_2}

---

##### `billingContactUser`<sup>Optional</sup> <a name="billingContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.billingContactUser"></a>

```typescript
public readonly billingContactUser: string;
```

- *Type:* string

User ID representing the billing contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#billing_contact_user OrgConfiguration#billing_contact_user}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

City of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#city OrgConfiguration#city}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Country of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#country OrgConfiguration#country}

---

##### `endUserSupportHelpUrl`<sup>Optional</sup> <a name="endUserSupportHelpUrl" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.endUserSupportHelpUrl"></a>

```typescript
public readonly endUserSupportHelpUrl: string;
```

- *Type:* string

Support link of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#end_user_support_help_url OrgConfiguration#end_user_support_help_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#id OrgConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.logo"></a>

```typescript
public readonly logo: string;
```

- *Type:* string

Logo of org.

The file must be in PNG, JPG, or GIF format and less than 1 MB in size. For best results use landscape orientation, a transparent background, and a minimum size of 420px by 120px to prevent upscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#logo OrgConfiguration#logo}

---

##### `optOutCommunicationEmails`<sup>Optional</sup> <a name="optOutCommunicationEmails" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.optOutCommunicationEmails"></a>

```typescript
public readonly optOutCommunicationEmails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the org's users receive Okta Communication emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#opt_out_communication_emails OrgConfiguration#opt_out_communication_emails}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#phone_number OrgConfiguration#phone_number}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Postal code of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#postal_code OrgConfiguration#postal_code}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

State of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#state OrgConfiguration#state}

---

##### `supportPhoneNumber`<sup>Optional</sup> <a name="supportPhoneNumber" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.supportPhoneNumber"></a>

```typescript
public readonly supportPhoneNumber: string;
```

- *Type:* string

Support help phone of org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#support_phone_number OrgConfiguration#support_phone_number}

---

##### `technicalContactUser`<sup>Optional</sup> <a name="technicalContactUser" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.technicalContactUser"></a>

```typescript
public readonly technicalContactUser: string;
```

- *Type:* string

User ID representing the technical contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#technical_contact_user OrgConfiguration#technical_contact_user}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-okta.orgConfiguration.OrgConfigurationConfig.property.website"></a>

```typescript
public readonly website: string;
```

- *Type:* string

The org's website.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/org_configuration#website OrgConfiguration#website}

---



