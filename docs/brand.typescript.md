# `okta_brand`

Refer to the Terraform Registory for docs: [`okta_brand`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand).

# `brand` Submodule <a name="`brand` Submodule" id="@cdktf/provider-okta.brand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Brand <a name="Brand" id="@cdktf/provider-okta.brand.Brand"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand okta_brand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.brand.Brand.Initializer"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

new brand.Brand(scope: Construct, id: string, config: BrandConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.brand.BrandConfig">BrandConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.brand.BrandConfig">BrandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy">resetAgreeToCustomPrivacyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetBrandId">resetBrandId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl">resetCustomPrivacyPolicyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetDefaultAppAppInstanceId">resetDefaultAppAppInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetDefaultAppAppLinkName">resetDefaultAppAppLinkName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetDefaultAppClassicApplicationUri">resetDefaultAppClassicApplicationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetEmailDomainId">resetEmailDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta">resetRemovePoweredByOkta</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.brand.Brand.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.brand.Brand.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.brand.Brand.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.brand.Brand.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.brand.Brand.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.brand.Brand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.brand.Brand.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.brand.Brand.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.brand.Brand.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.brand.Brand.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAgreeToCustomPrivacyPolicy` <a name="resetAgreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy"></a>

```typescript
public resetAgreeToCustomPrivacyPolicy(): void
```

##### `resetBrandId` <a name="resetBrandId" id="@cdktf/provider-okta.brand.Brand.resetBrandId"></a>

```typescript
public resetBrandId(): void
```

##### `resetCustomPrivacyPolicyUrl` <a name="resetCustomPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl"></a>

```typescript
public resetCustomPrivacyPolicyUrl(): void
```

##### `resetDefaultAppAppInstanceId` <a name="resetDefaultAppAppInstanceId" id="@cdktf/provider-okta.brand.Brand.resetDefaultAppAppInstanceId"></a>

```typescript
public resetDefaultAppAppInstanceId(): void
```

##### `resetDefaultAppAppLinkName` <a name="resetDefaultAppAppLinkName" id="@cdktf/provider-okta.brand.Brand.resetDefaultAppAppLinkName"></a>

```typescript
public resetDefaultAppAppLinkName(): void
```

##### `resetDefaultAppClassicApplicationUri` <a name="resetDefaultAppClassicApplicationUri" id="@cdktf/provider-okta.brand.Brand.resetDefaultAppClassicApplicationUri"></a>

```typescript
public resetDefaultAppClassicApplicationUri(): void
```

##### `resetEmailDomainId` <a name="resetEmailDomainId" id="@cdktf/provider-okta.brand.Brand.resetEmailDomainId"></a>

```typescript
public resetEmailDomainId(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-okta.brand.Brand.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetRemovePoweredByOkta` <a name="resetRemovePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta"></a>

```typescript
public resetRemovePoweredByOkta(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Brand resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.brand.Brand.isConstruct"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

brand.Brand.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.brand.Brand.isTerraformElement"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

brand.Brand.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.brand.Brand.isTerraformResource"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

brand.Brand.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

brand.Brand.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Brand resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Brand to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Brand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Brand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.links">links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput">agreeToCustomPrivacyPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandIdInput">brandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput">customPrivacyPolicyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceIdInput">defaultAppAppInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkNameInput">defaultAppAppLinkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUriInput">defaultAppClassicApplicationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.emailDomainIdInput">emailDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput">removePoweredByOktaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy">agreeToCustomPrivacyPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandId">brandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl">customPrivacyPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceId">defaultAppAppInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkName">defaultAppAppLinkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUri">defaultAppClassicApplicationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.emailDomainId">emailDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta">removePoweredByOkta</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.brand.Brand.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.brand.Brand.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.brand.Brand.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.brand.Brand.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.Brand.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.Brand.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.brand.Brand.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.brand.Brand.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.Brand.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.Brand.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-okta.brand.Brand.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.brand.Brand.property.links"></a>

```typescript
public readonly links: string;
```

- *Type:* string

---

##### `agreeToCustomPrivacyPolicyInput`<sup>Optional</sup> <a name="agreeToCustomPrivacyPolicyInput" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput"></a>

```typescript
public readonly agreeToCustomPrivacyPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.brand.Brand.property.brandIdInput"></a>

```typescript
public readonly brandIdInput: string;
```

- *Type:* string

---

##### `customPrivacyPolicyUrlInput`<sup>Optional</sup> <a name="customPrivacyPolicyUrlInput" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput"></a>

```typescript
public readonly customPrivacyPolicyUrlInput: string;
```

- *Type:* string

---

##### `defaultAppAppInstanceIdInput`<sup>Optional</sup> <a name="defaultAppAppInstanceIdInput" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceIdInput"></a>

```typescript
public readonly defaultAppAppInstanceIdInput: string;
```

- *Type:* string

---

##### `defaultAppAppLinkNameInput`<sup>Optional</sup> <a name="defaultAppAppLinkNameInput" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkNameInput"></a>

```typescript
public readonly defaultAppAppLinkNameInput: string;
```

- *Type:* string

---

##### `defaultAppClassicApplicationUriInput`<sup>Optional</sup> <a name="defaultAppClassicApplicationUriInput" id="@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUriInput"></a>

```typescript
public readonly defaultAppClassicApplicationUriInput: string;
```

- *Type:* string

---

##### `emailDomainIdInput`<sup>Optional</sup> <a name="emailDomainIdInput" id="@cdktf/provider-okta.brand.Brand.property.emailDomainIdInput"></a>

```typescript
public readonly emailDomainIdInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-okta.brand.Brand.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.brand.Brand.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `removePoweredByOktaInput`<sup>Optional</sup> <a name="removePoweredByOktaInput" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput"></a>

```typescript
public readonly removePoweredByOktaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `agreeToCustomPrivacyPolicy`<sup>Required</sup> <a name="agreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy"></a>

```typescript
public readonly agreeToCustomPrivacyPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.brand.Brand.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

---

##### `customPrivacyPolicyUrl`<sup>Required</sup> <a name="customPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl"></a>

```typescript
public readonly customPrivacyPolicyUrl: string;
```

- *Type:* string

---

##### `defaultAppAppInstanceId`<sup>Required</sup> <a name="defaultAppAppInstanceId" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppInstanceId"></a>

```typescript
public readonly defaultAppAppInstanceId: string;
```

- *Type:* string

---

##### `defaultAppAppLinkName`<sup>Required</sup> <a name="defaultAppAppLinkName" id="@cdktf/provider-okta.brand.Brand.property.defaultAppAppLinkName"></a>

```typescript
public readonly defaultAppAppLinkName: string;
```

- *Type:* string

---

##### `defaultAppClassicApplicationUri`<sup>Required</sup> <a name="defaultAppClassicApplicationUri" id="@cdktf/provider-okta.brand.Brand.property.defaultAppClassicApplicationUri"></a>

```typescript
public readonly defaultAppClassicApplicationUri: string;
```

- *Type:* string

---

##### `emailDomainId`<sup>Required</sup> <a name="emailDomainId" id="@cdktf/provider-okta.brand.Brand.property.emailDomainId"></a>

```typescript
public readonly emailDomainId: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.brand.Brand.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.brand.Brand.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `removePoweredByOkta`<sup>Required</sup> <a name="removePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta"></a>

```typescript
public readonly removePoweredByOkta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.brand.Brand.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BrandConfig <a name="BrandConfig" id="@cdktf/provider-okta.brand.BrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.brand.BrandConfig.Initializer"></a>

```typescript
import { brand } from '@cdktf/provider-okta'

const brandConfig: brand.BrandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.name">name</a></code> | <code>string</code> | Brand name. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy">agreeToCustomPrivacyPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Consent for updating the custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.brandId">brandId</a></code> | <code>string</code> | Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl">customPrivacyPolicyUrl</a></code> | <code>string</code> | Custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppInstanceId">defaultAppAppInstanceId</a></code> | <code>string</code> | Default app app instance id. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppLinkName">defaultAppAppLinkName</a></code> | <code>string</code> | Default app app link name. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.defaultAppClassicApplicationUri">defaultAppClassicApplicationUri</a></code> | <code>string</code> | Default app classic application uri. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.emailDomainId">emailDomainId</a></code> | <code>string</code> | Email Domain ID tied to this brand. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.locale">locale</a></code> | <code>string</code> | The language specified as an IETF BCP 47 language tag. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta">removePoweredByOkta</a></code> | <code>boolean \| cdktf.IResolvable</code> | Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.BrandConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.BrandConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.brand.BrandConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.brand.BrandConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.BrandConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.BrandConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.BrandConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.brand.BrandConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Brand name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#name Brand#name}

---

##### `agreeToCustomPrivacyPolicy`<sup>Optional</sup> <a name="agreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy"></a>

```typescript
public readonly agreeToCustomPrivacyPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Consent for updating the custom privacy policy URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}

---

##### `brandId`<sup>Optional</sup> <a name="brandId" id="@cdktf/provider-okta.brand.BrandConfig.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source.

Do this by setting brand_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#brand_id Brand#brand_id}

---

##### `customPrivacyPolicyUrl`<sup>Optional</sup> <a name="customPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl"></a>

```typescript
public readonly customPrivacyPolicyUrl: string;
```

- *Type:* string

Custom privacy policy URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}

---

##### `defaultAppAppInstanceId`<sup>Optional</sup> <a name="defaultAppAppInstanceId" id="@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppInstanceId"></a>

```typescript
public readonly defaultAppAppInstanceId: string;
```

- *Type:* string

Default app app instance id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#default_app_app_instance_id Brand#default_app_app_instance_id}

---

##### `defaultAppAppLinkName`<sup>Optional</sup> <a name="defaultAppAppLinkName" id="@cdktf/provider-okta.brand.BrandConfig.property.defaultAppAppLinkName"></a>

```typescript
public readonly defaultAppAppLinkName: string;
```

- *Type:* string

Default app app link name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#default_app_app_link_name Brand#default_app_app_link_name}

---

##### `defaultAppClassicApplicationUri`<sup>Optional</sup> <a name="defaultAppClassicApplicationUri" id="@cdktf/provider-okta.brand.BrandConfig.property.defaultAppClassicApplicationUri"></a>

```typescript
public readonly defaultAppClassicApplicationUri: string;
```

- *Type:* string

Default app classic application uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#default_app_classic_application_uri Brand#default_app_classic_application_uri}

---

##### `emailDomainId`<sup>Optional</sup> <a name="emailDomainId" id="@cdktf/provider-okta.brand.BrandConfig.property.emailDomainId"></a>

```typescript
public readonly emailDomainId: string;
```

- *Type:* string

Email Domain ID tied to this brand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#email_domain_id Brand#email_domain_id}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.brand.BrandConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

The language specified as an IETF BCP 47 language tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#locale Brand#locale}

---

##### `removePoweredByOkta`<sup>Optional</sup> <a name="removePoweredByOkta" id="@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta"></a>

```typescript
public readonly removePoweredByOkta: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/brand#remove_powered_by_okta Brand#remove_powered_by_okta}

---



