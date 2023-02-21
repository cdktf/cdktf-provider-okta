# `templateEmail` Submodule <a name="`templateEmail` Submodule" id="@cdktf/provider-okta.templateEmail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TemplateEmail <a name="TemplateEmail" id="@cdktf/provider-okta.templateEmail.TemplateEmail"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/template_email okta_template_email}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.templateEmail.TemplateEmail.Initializer"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

new templateEmail.TemplateEmail(scope: Construct, id: string, config: TemplateEmailConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig">TemplateEmailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.templateEmail.TemplateEmail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.templateEmail.TemplateEmail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.templateEmail.TemplateEmail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig">TemplateEmailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.putTranslations">putTranslations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.resetDefaultLanguage">resetDefaultLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.templateEmail.TemplateEmail.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.templateEmail.TemplateEmail.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.templateEmail.TemplateEmail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.templateEmail.TemplateEmail.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.templateEmail.TemplateEmail.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.templateEmail.TemplateEmail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.templateEmail.TemplateEmail.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.templateEmail.TemplateEmail.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.templateEmail.TemplateEmail.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTranslations` <a name="putTranslations" id="@cdktf/provider-okta.templateEmail.TemplateEmail.putTranslations"></a>

```typescript
public putTranslations(value: IResolvable | TemplateEmailTranslations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.templateEmail.TemplateEmail.putTranslations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a>[]

---

##### `resetDefaultLanguage` <a name="resetDefaultLanguage" id="@cdktf/provider-okta.templateEmail.TemplateEmail.resetDefaultLanguage"></a>

```typescript
public resetDefaultLanguage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.templateEmail.TemplateEmail.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.templateEmail.TemplateEmail.isConstruct"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

templateEmail.TemplateEmail.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.templateEmail.TemplateEmail.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.templateEmail.TemplateEmail.isTerraformElement"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

templateEmail.TemplateEmail.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.templateEmail.TemplateEmail.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.templateEmail.TemplateEmail.isTerraformResource"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

templateEmail.TemplateEmail.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.templateEmail.TemplateEmail.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.translations">translations</a></code> | <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList">TemplateEmailTranslationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.defaultLanguageInput">defaultLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.translationsInput">translationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.defaultLanguage">defaultLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `translations`<sup>Required</sup> <a name="translations" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.translations"></a>

```typescript
public readonly translations: TemplateEmailTranslationsList;
```

- *Type:* <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList">TemplateEmailTranslationsList</a>

---

##### `defaultLanguageInput`<sup>Optional</sup> <a name="defaultLanguageInput" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.defaultLanguageInput"></a>

```typescript
public readonly defaultLanguageInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `translationsInput`<sup>Optional</sup> <a name="translationsInput" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.translationsInput"></a>

```typescript
public readonly translationsInput: IResolvable | TemplateEmailTranslations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultLanguage`<sup>Required</sup> <a name="defaultLanguage" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.defaultLanguage"></a>

```typescript
public readonly defaultLanguage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmail.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.templateEmail.TemplateEmail.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TemplateEmailConfig <a name="TemplateEmailConfig" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.Initializer"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

const templateEmailConfig: templateEmail.TemplateEmailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.translations">translations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a>[]</code> | translations block. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.type">type</a></code> | <code>string</code> | Email template type. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.defaultLanguage">defaultLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#default_language TemplateEmail#default_language}. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#id TemplateEmail#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `translations`<sup>Required</sup> <a name="translations" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.translations"></a>

```typescript
public readonly translations: IResolvable | TemplateEmailTranslations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a>[]

translations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#translations TemplateEmail#translations}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Email template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#type TemplateEmail#type}

---

##### `defaultLanguage`<sup>Optional</sup> <a name="defaultLanguage" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.defaultLanguage"></a>

```typescript
public readonly defaultLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#default_language TemplateEmail#default_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.templateEmail.TemplateEmailConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#id TemplateEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TemplateEmailTranslations <a name="TemplateEmailTranslations" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslations.Initializer"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

const templateEmailTranslations: templateEmail.TemplateEmailTranslations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#language TemplateEmail#language}. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#subject TemplateEmail#subject}. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations.property.template">template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#template TemplateEmail#template}. |

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslations.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#language TemplateEmail#language}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslations.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#subject TemplateEmail#subject}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslations.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/template_email#template TemplateEmail#template}.

---

## Classes <a name="Classes" id="Classes"></a>

### TemplateEmailTranslationsList <a name="TemplateEmailTranslationsList" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.Initializer"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

new templateEmail.TemplateEmailTranslationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.get"></a>

```typescript
public get(index: number): TemplateEmailTranslationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TemplateEmailTranslations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a>[]

---


### TemplateEmailTranslationsOutputReference <a name="TemplateEmailTranslationsOutputReference" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer"></a>

```typescript
import { templateEmail } from '@cdktf/provider-okta'

new templateEmail.TemplateEmailTranslationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.templateEmail.TemplateEmailTranslationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TemplateEmailTranslations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.templateEmail.TemplateEmailTranslations">TemplateEmailTranslations</a> | cdktf.IResolvable

---



