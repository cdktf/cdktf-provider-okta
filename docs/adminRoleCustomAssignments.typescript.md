# `adminRoleCustomAssignments` Submodule <a name="`adminRoleCustomAssignments` Submodule" id="@cdktf/provider-okta.adminRoleCustomAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminRoleCustomAssignments <a name="AdminRoleCustomAssignments" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments okta_admin_role_custom_assignments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer"></a>

```typescript
import { adminRoleCustomAssignments } from '@cdktf/provider-okta'

new adminRoleCustomAssignments.AdminRoleCustomAssignments(scope: Construct, id: string, config: AdminRoleCustomAssignmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig">AdminRoleCustomAssignmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig">AdminRoleCustomAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetMembers">resetMembers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.resetMembers"></a>

```typescript
public resetMembers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct"></a>

```typescript
import { adminRoleCustomAssignments } from '@cdktf/provider-okta'

adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement"></a>

```typescript
import { adminRoleCustomAssignments } from '@cdktf/provider-okta'

adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource"></a>

```typescript
import { adminRoleCustomAssignments } from '@cdktf/provider-okta'

adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleIdInput">customRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetIdInput">resourceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleId">customRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetId">resourceSetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customRoleIdInput`<sup>Optional</sup> <a name="customRoleIdInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleIdInput"></a>

```typescript
public readonly customRoleIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `resourceSetIdInput`<sup>Optional</sup> <a name="resourceSetIdInput" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetIdInput"></a>

```typescript
public readonly resourceSetIdInput: string;
```

- *Type:* string

---

##### `customRoleId`<sup>Required</sup> <a name="customRoleId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.customRoleId"></a>

```typescript
public readonly customRoleId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `resourceSetId`<sup>Required</sup> <a name="resourceSetId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.resourceSetId"></a>

```typescript
public readonly resourceSetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdminRoleCustomAssignmentsConfig <a name="AdminRoleCustomAssignmentsConfig" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.Initializer"></a>

```typescript
import { adminRoleCustomAssignments } from '@cdktf/provider-okta'

const adminRoleCustomAssignmentsConfig: adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.customRoleId">customRoleId</a></code> | <code>string</code> | ID of the Custom Role. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.resourceSetId">resourceSetId</a></code> | <code>string</code> | ID of the target Resource Set. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}. |
| <code><a href="#@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.members">members</a></code> | <code>string[]</code> | The hrefs that point to User(s) and/or Group(s) that receive the Role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customRoleId`<sup>Required</sup> <a name="customRoleId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.customRoleId"></a>

```typescript
public readonly customRoleId: string;
```

- *Type:* string

ID of the Custom Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#custom_role_id AdminRoleCustomAssignments#custom_role_id}

---

##### `resourceSetId`<sup>Required</sup> <a name="resourceSetId" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.resourceSetId"></a>

```typescript
public readonly resourceSetId: string;
```

- *Type:* string

ID of the target Resource Set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#resource_set_id AdminRoleCustomAssignments#resource_set_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-okta.adminRoleCustomAssignments.AdminRoleCustomAssignmentsConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

The hrefs that point to User(s) and/or Group(s) that receive the Role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#members AdminRoleCustomAssignments#members}

---


