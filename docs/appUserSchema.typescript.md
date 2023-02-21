# `appUserSchema` Submodule <a name="`appUserSchema` Submodule" id="@cdktf/provider-okta.appUserSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchema <a name="AppUserSchema" id="@cdktf/provider-okta.appUserSchema.AppUserSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema okta_app_user_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

new appUserSchema.AppUserSchema(scope: Construct, id: string, config: AppUserSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig">AppUserSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig">AppUserSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf">putArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf">putOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum">resetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf">resetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType">resetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace">resetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf">resetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion">resetUnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique">resetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putArrayOneOf` <a name="putArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf"></a>

```typescript
public putArrayOneOf(value: IResolvable | AppUserSchemaArrayOneOf[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>[]

---

##### `putOneOf` <a name="putOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf"></a>

```typescript
public putOneOf(value: IResolvable | AppUserSchemaOneOf[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>[]

---

##### `resetArrayEnum` <a name="resetArrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum"></a>

```typescript
public resetArrayEnum(): void
```

##### `resetArrayOneOf` <a name="resetArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf"></a>

```typescript
public resetArrayOneOf(): void
```

##### `resetArrayType` <a name="resetArrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType"></a>

```typescript
public resetArrayType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName"></a>

```typescript
public resetExternalName(): void
```

##### `resetExternalNamespace` <a name="resetExternalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace"></a>

```typescript
public resetExternalNamespace(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster"></a>

```typescript
public resetMaster(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength"></a>

```typescript
public resetMinLength(): void
```

##### `resetOneOf` <a name="resetOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf"></a>

```typescript
public resetOneOf(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetUnion` <a name="resetUnion" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion"></a>

```typescript
public resetUnion(): void
```

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique"></a>

```typescript
public resetUnique(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

appUserSchema.AppUserSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

appUserSchema.AppUserSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

appUserSchema.AppUserSchema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf">arrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf">oneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput">arrayEnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput">arrayOneOfInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput">arrayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput">enumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput">externalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput">externalNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput">masterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput">oneOfInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput">unionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput">uniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum">arrayEnum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType">arrayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum">enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName">externalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace">externalNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master">master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union">union</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique">unique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arrayOneOf`<sup>Required</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf"></a>

```typescript
public readonly arrayOneOf: AppUserSchemaArrayOneOfList;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a>

---

##### `oneOf`<sup>Required</sup> <a name="oneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf"></a>

```typescript
public readonly oneOf: AppUserSchemaOneOfList;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `arrayEnumInput`<sup>Optional</sup> <a name="arrayEnumInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput"></a>

```typescript
public readonly arrayEnumInput: string[];
```

- *Type:* string[]

---

##### `arrayOneOfInput`<sup>Optional</sup> <a name="arrayOneOfInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput"></a>

```typescript
public readonly arrayOneOfInput: IResolvable | AppUserSchemaArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>[]

---

##### `arrayTypeInput`<sup>Optional</sup> <a name="arrayTypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput"></a>

```typescript
public readonly arrayTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput"></a>

```typescript
public readonly enumInput: string[];
```

- *Type:* string[]

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput"></a>

```typescript
public readonly externalNameInput: string;
```

- *Type:* string

---

##### `externalNamespaceInput`<sup>Optional</sup> <a name="externalNamespaceInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput"></a>

```typescript
public readonly externalNamespaceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput"></a>

```typescript
public readonly masterInput: string;
```

- *Type:* string

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `oneOfInput`<sup>Optional</sup> <a name="oneOfInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput"></a>

```typescript
public readonly oneOfInput: IResolvable | AppUserSchemaOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>[]

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unionInput`<sup>Optional</sup> <a name="unionInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput"></a>

```typescript
public readonly unionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput"></a>

```typescript
public readonly uniqueInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `arrayEnum`<sup>Required</sup> <a name="arrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum"></a>

```typescript
public readonly arrayEnum: string[];
```

- *Type:* string[]

---

##### `arrayType`<sup>Required</sup> <a name="arrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType"></a>

```typescript
public readonly arrayType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

---

##### `externalNamespace`<sup>Required</sup> <a name="externalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace"></a>

```typescript
public readonly externalNamespace: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `union`<sup>Required</sup> <a name="union" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union"></a>

```typescript
public readonly union: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique"></a>

```typescript
public readonly unique: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaArrayOneOf <a name="AppUserSchemaArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

const appUserSchemaArrayOneOf: appUserSchema.AppUserSchemaArrayOneOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const">const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title">title</a></code> | <code>string</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#const AppUserSchema#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

### AppUserSchemaConfig <a name="AppUserSchemaConfig" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

const appUserSchemaConfig: appUserSchema.AppUserSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#app_id AppUserSchema#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index">index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title">title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type">type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum">arrayEnum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf">arrayOneOf</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>[]</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType">arrayType</a></code> | <code>string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description">description</a></code> | <code>string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum">enum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName">externalName</a></code> | <code>string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace">externalNamespace</a></code> | <code>string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#id AppUserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master">master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength">maxLength</a></code> | <code>number</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength">minLength</a></code> | <code>number</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf">oneOf</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>[]</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions">permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#scope AppUserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union">union</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows to assign attribute's group priority. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique">unique</a></code> | <code>string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType">userType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#app_id AppUserSchema#app_id}.

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#index AppUserSchema#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#type AppUserSchema#type}

---

##### `arrayEnum`<sup>Optional</sup> <a name="arrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum"></a>

```typescript
public readonly arrayEnum: string[];
```

- *Type:* string[]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_enum AppUserSchema#array_enum}

---

##### `arrayOneOf`<sup>Optional</sup> <a name="arrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf"></a>

```typescript
public readonly arrayOneOf: IResolvable | AppUserSchemaArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>[]

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_one_of AppUserSchema#array_one_of}

---

##### `arrayType`<sup>Optional</sup> <a name="arrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType"></a>

```typescript
public readonly arrayType: string;
```

- *Type:* string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_type AppUserSchema#array_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#description AppUserSchema#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#enum AppUserSchema#enum}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#external_name AppUserSchema#external_name}

---

##### `externalNamespace`<sup>Optional</sup> <a name="externalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace"></a>

```typescript
public readonly externalNamespace: string;
```

- *Type:* string

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#external_namespace AppUserSchema#external_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#id AppUserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#master AppUserSchema#master}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#max_length AppUserSchema#max_length}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#min_length AppUserSchema#min_length}

---

##### `oneOf`<sup>Optional</sup> <a name="oneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf"></a>

```typescript
public readonly oneOf: IResolvable | AppUserSchemaOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>[]

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#one_of AppUserSchema#one_of}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#permissions AppUserSchema#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#required AppUserSchema#required}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#scope AppUserSchema#scope}.

---

##### `union`<sup>Optional</sup> <a name="union" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union"></a>

```typescript
public readonly union: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows to assign attribute's group priority.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#union AppUserSchema#union}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique"></a>

```typescript
public readonly unique: string;
```

- *Type:* string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#unique AppUserSchema#unique}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#user_type AppUserSchema#user_type}

---

### AppUserSchemaOneOf <a name="AppUserSchemaOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

const appUserSchemaOneOf: appUserSchema.AppUserSchemaOneOf = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const">const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title">title</a></code> | <code>string</code> | Enum title. |

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#const AppUserSchema#const}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaArrayOneOfList <a name="AppUserSchemaArrayOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

new appUserSchema.AppUserSchemaArrayOneOfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get"></a>

```typescript
public get(index: number): AppUserSchemaArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppUserSchemaArrayOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a>[]

---


### AppUserSchemaArrayOneOfOutputReference <a name="AppUserSchemaArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

new appUserSchema.AppUserSchemaArrayOneOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput">constInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const">const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput"></a>

```typescript
public readonly constInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppUserSchemaArrayOneOf | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf">AppUserSchemaArrayOneOf</a> | cdktf.IResolvable

---


### AppUserSchemaOneOfList <a name="AppUserSchemaOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

new appUserSchema.AppUserSchemaOneOfList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get"></a>

```typescript
public get(index: number): AppUserSchemaOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppUserSchemaOneOf[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a>[]

---


### AppUserSchemaOneOfOutputReference <a name="AppUserSchemaOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer"></a>

```typescript
import { appUserSchema } from '@cdktf/provider-okta'

new appUserSchema.AppUserSchemaOneOfOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput">constInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const">const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constInput`<sup>Optional</sup> <a name="constInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput"></a>

```typescript
public readonly constInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `const`<sup>Required</sup> <a name="const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const"></a>

```typescript
public readonly const: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppUserSchemaOneOf | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf">AppUserSchemaOneOf</a> | cdktf.IResolvable

---



