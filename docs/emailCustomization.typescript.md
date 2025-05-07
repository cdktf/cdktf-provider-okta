# `emailCustomization` Submodule <a name="`emailCustomization` Submodule" id="@cdktf/provider-okta.emailCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCustomization <a name="EmailCustomization" id="@cdktf/provider-okta.emailCustomization.EmailCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization okta_email_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer"></a>

```typescript
import { emailCustomization } from '@cdktf/provider-okta'

new emailCustomization.EmailCustomization(scope: Construct, id: string, config: EmailCustomizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig">EmailCustomizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig">EmailCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault">resetForceIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetForceIsDefault` <a name="resetForceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault"></a>

```typescript
public resetForceIsDefault(): void
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault"></a>

```typescript
public resetIsDefault(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject"></a>

```typescript
public resetSubject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmailCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct"></a>

```typescript
import { emailCustomization } from '@cdktf/provider-okta'

emailCustomization.EmailCustomization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement"></a>

```typescript
import { emailCustomization } from '@cdktf/provider-okta'

emailCustomization.EmailCustomization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource"></a>

```typescript
import { emailCustomization } from '@cdktf/provider-okta'

emailCustomization.EmailCustomization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport"></a>

```typescript
import { emailCustomization } from '@cdktf/provider-okta'

emailCustomization.EmailCustomization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EmailCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmailCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links">links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput">brandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput">forceIsDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput">isDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId">brandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault">forceIsDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links"></a>

```typescript
public readonly links: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput"></a>

```typescript
public readonly brandIdInput: string;
```

- *Type:* string

---

##### `forceIsDefaultInput`<sup>Optional</sup> <a name="forceIsDefaultInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput"></a>

```typescript
public readonly forceIsDefaultInput: string;
```

- *Type:* string

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput"></a>

```typescript
public readonly isDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

---

##### `forceIsDefault`<sup>Required</sup> <a name="forceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault"></a>

```typescript
public readonly forceIsDefault: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCustomizationConfig <a name="EmailCustomizationConfig" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.Initializer"></a>

```typescript
import { emailCustomization } from '@cdktf/provider-okta'

const emailCustomizationConfig: emailCustomization.EmailCustomizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId">brandId</a></code> | <code>string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName">templateName</a></code> | <code>string</code> | Template Name - Example values: `AccountLockout`,`ADForgotPassword`,`ADForgotPasswordDenied`,`ADSelfServiceUnlock`,`ADUserActivation`,`AuthenticatorEnrolled`,`AuthenticatorReset`,`ChangeEmailConfirmation`,`EmailChallenge`,`EmailChangeConfirmation`,`EmailFactorVerification`,`ForgotPassword`,`ForgotPasswordDenied`,`IGAReviewerEndNotification`,`IGAReviewerNotification`,`IGAReviewerPendingNotification`,`IGAReviewerReassigned`,`LDAPForgotPassword`,`LDAPForgotPasswordDenied`,`LDAPSelfServiceUnlock`,`LDAPUserActivation`,`MyAccountChangeConfirmation`,`NewSignOnNotification`,`OktaVerifyActivation`,`PasswordChanged`,`PasswordResetByAdmin`,`PendingEmailChange`,`RegistrationActivation`,`RegistrationEmailVerification`,`SelfServiceUnlock`,`SelfServiceUnlockOnUnlockedAccount`,`UserActivation`. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body">body</a></code> | <code>string</code> | The body of the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault">forceIsDefault</a></code> | <code>string</code> | Force is_default on the create and delete by deleting all email customizations. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault">isDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the customization is the default. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language">language</a></code> | <code>string</code> | The language supported by the customization - Example values from [supported languages](https://developer.okta.com/docs/reference/api/brands/#supported-languages). |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject">subject</a></code> | <code>string</code> | The subject of the customization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#brand_id EmailCustomization#brand_id}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Template Name - Example values: `AccountLockout`,`ADForgotPassword`,`ADForgotPasswordDenied`,`ADSelfServiceUnlock`,`ADUserActivation`,`AuthenticatorEnrolled`,`AuthenticatorReset`,`ChangeEmailConfirmation`,`EmailChallenge`,`EmailChangeConfirmation`,`EmailFactorVerification`,`ForgotPassword`,`ForgotPasswordDenied`,`IGAReviewerEndNotification`,`IGAReviewerNotification`,`IGAReviewerPendingNotification`,`IGAReviewerReassigned`,`LDAPForgotPassword`,`LDAPForgotPasswordDenied`,`LDAPSelfServiceUnlock`,`LDAPUserActivation`,`MyAccountChangeConfirmation`,`NewSignOnNotification`,`OktaVerifyActivation`,`PasswordChanged`,`PasswordResetByAdmin`,`PendingEmailChange`,`RegistrationActivation`,`RegistrationEmailVerification`,`SelfServiceUnlock`,`SelfServiceUnlockOnUnlockedAccount`,`UserActivation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#template_name EmailCustomization#template_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The body of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#body EmailCustomization#body}

---

##### `forceIsDefault`<sup>Optional</sup> <a name="forceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault"></a>

```typescript
public readonly forceIsDefault: string;
```

- *Type:* string

Force is_default on the create and delete by deleting all email customizations.

Comma separated string with values of 'create' or 'destroy' or both `create,destroy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#force_is_default EmailCustomization#force_is_default}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault"></a>

```typescript
public readonly isDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the customization is the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#is_default EmailCustomization#is_default}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The language supported by the customization - Example values from [supported languages](https://developer.okta.com/docs/reference/api/brands/#supported-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#language EmailCustomization#language}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

The subject of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/email_customization#subject EmailCustomization#subject}

---



