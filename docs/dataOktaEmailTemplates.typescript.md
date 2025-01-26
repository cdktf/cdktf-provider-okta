# `dataOktaEmailTemplates` Submodule <a name="`dataOktaEmailTemplates` Submodule" id="@cdktf/provider-okta.dataOktaEmailTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaEmailTemplates <a name="DataOktaEmailTemplates" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/email_templates okta_email_templates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.Initializer"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

new dataOktaEmailTemplates.DataOktaEmailTemplates(scope: Construct, id: string, config: DataOktaEmailTemplatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig">DataOktaEmailTemplatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig">DataOktaEmailTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaEmailTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isConstruct"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

dataOktaEmailTemplates.DataOktaEmailTemplates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformElement"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformDataSource"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.generateConfigForImport"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

dataOktaEmailTemplates.DataOktaEmailTemplates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaEmailTemplates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaEmailTemplates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaEmailTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/email_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaEmailTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.emailTemplates">emailTemplates</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList">DataOktaEmailTemplatesEmailTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.brandIdInput">brandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.brandId">brandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `emailTemplates`<sup>Required</sup> <a name="emailTemplates" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.emailTemplates"></a>

```typescript
public readonly emailTemplates: DataOktaEmailTemplatesEmailTemplatesList;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList">DataOktaEmailTemplatesEmailTemplatesList</a>

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.brandIdInput"></a>

```typescript
public readonly brandIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaEmailTemplatesConfig <a name="DataOktaEmailTemplatesConfig" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.Initializer"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

const dataOktaEmailTemplatesConfig: dataOktaEmailTemplates.DataOktaEmailTemplatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.brandId">brandId</a></code> | <code>string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/email_templates#id DataOktaEmailTemplates#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/email_templates#brand_id DataOktaEmailTemplates#brand_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/email_templates#id DataOktaEmailTemplates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaEmailTemplatesEmailTemplates <a name="DataOktaEmailTemplatesEmailTemplates" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplates.Initializer"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

const dataOktaEmailTemplatesEmailTemplates: dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplates = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaEmailTemplatesEmailTemplatesList <a name="DataOktaEmailTemplatesEmailTemplatesList" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.Initializer"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

new dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.get"></a>

```typescript
public get(index: number): DataOktaEmailTemplatesEmailTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOktaEmailTemplatesEmailTemplatesOutputReference <a name="DataOktaEmailTemplatesEmailTemplatesOutputReference" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer"></a>

```typescript
import { dataOktaEmailTemplates } from '@cdktf/provider-okta'

new dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.links">links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplates">DataOktaEmailTemplatesEmailTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.links"></a>

```typescript
public readonly links: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOktaEmailTemplatesEmailTemplates;
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailTemplates.DataOktaEmailTemplatesEmailTemplates">DataOktaEmailTemplatesEmailTemplates</a>

---



