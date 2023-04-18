# `okta_app_signon_policy_rule`

Refer to the Terraform Registory for docs: [`okta_app_signon_policy_rule`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule).

# `appSignonPolicyRule` Submodule <a name="`appSignonPolicyRule` Submodule" id="@cdktf/provider-okta.appSignonPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSignonPolicyRule <a name="AppSignonPolicyRule" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule okta_app_signon_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

new appSignonPolicyRule.AppSignonPolicyRule(scope: Construct, id: string, config: AppSignonPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig">AppSignonPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig">AppSignonPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude">putPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints">resetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression">resetCustomExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged">resetDeviceIsManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered">resetDeviceIsRegistered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode">resetFactorMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded">resetGroupsExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod">resetInactivityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude">resetPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency">resetReAuthenticationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded">resetUsersIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded">resetUserTypesExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded">resetUserTypesIncluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPlatformInclude` <a name="putPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude"></a>

```typescript
public putPlatformInclude(value: IResolvable | AppSignonPolicyRulePlatformInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.putPlatformInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>[]

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetConstraints` <a name="resetConstraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetConstraints"></a>

```typescript
public resetConstraints(): void
```

##### `resetCustomExpression` <a name="resetCustomExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetCustomExpression"></a>

```typescript
public resetCustomExpression(): void
```

##### `resetDeviceIsManaged` <a name="resetDeviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsManaged"></a>

```typescript
public resetDeviceIsManaged(): void
```

##### `resetDeviceIsRegistered` <a name="resetDeviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetDeviceIsRegistered"></a>

```typescript
public resetDeviceIsRegistered(): void
```

##### `resetFactorMode` <a name="resetFactorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetFactorMode"></a>

```typescript
public resetFactorMode(): void
```

##### `resetGroupsExcluded` <a name="resetGroupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsExcluded"></a>

```typescript
public resetGroupsExcluded(): void
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetGroupsIncluded"></a>

```typescript
public resetGroupsIncluded(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInactivityPeriod` <a name="resetInactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetInactivityPeriod"></a>

```typescript
public resetInactivityPeriod(): void
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkConnection"></a>

```typescript
public resetNetworkConnection(): void
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkExcludes"></a>

```typescript
public resetNetworkExcludes(): void
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetNetworkIncludes"></a>

```typescript
public resetNetworkIncludes(): void
```

##### `resetPlatformInclude` <a name="resetPlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPlatformInclude"></a>

```typescript
public resetPlatformInclude(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetReAuthenticationFrequency` <a name="resetReAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetReAuthenticationFrequency"></a>

```typescript
public resetReAuthenticationFrequency(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersExcluded"></a>

```typescript
public resetUsersExcluded(): void
```

##### `resetUsersIncluded` <a name="resetUsersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUsersIncluded"></a>

```typescript
public resetUsersIncluded(): void
```

##### `resetUserTypesExcluded` <a name="resetUserTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesExcluded"></a>

```typescript
public resetUserTypesExcluded(): void
```

##### `resetUserTypesIncluded` <a name="resetUserTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.resetUserTypesIncluded"></a>

```typescript
public resetUserTypesIncluded(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

appSignonPolicyRule.AppSignonPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude">platformInclude</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput">constraintsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput">customExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput">deviceIsManagedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput">deviceIsRegisteredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput">factorModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput">groupsExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput">inactivityPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput">networkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput">networkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput">networkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput">platformIncludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput">reAuthenticationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput">usersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput">usersIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput">userTypesExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput">userTypesIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints">constraints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression">customExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged">deviceIsManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered">deviceIsRegistered</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode">factorMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded">groupsExcluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod">inactivityPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection">networkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency">reAuthenticationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded">usersIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded">userTypesExcluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded">userTypesIncluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `platformInclude`<sup>Required</sup> <a name="platformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformInclude"></a>

```typescript
public readonly platformInclude: AppSignonPolicyRulePlatformIncludeList;
```

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList">AppSignonPolicyRulePlatformIncludeList</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraintsInput"></a>

```typescript
public readonly constraintsInput: string[];
```

- *Type:* string[]

---

##### `customExpressionInput`<sup>Optional</sup> <a name="customExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpressionInput"></a>

```typescript
public readonly customExpressionInput: string;
```

- *Type:* string

---

##### `deviceIsManagedInput`<sup>Optional</sup> <a name="deviceIsManagedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManagedInput"></a>

```typescript
public readonly deviceIsManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceIsRegisteredInput`<sup>Optional</sup> <a name="deviceIsRegisteredInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegisteredInput"></a>

```typescript
public readonly deviceIsRegisteredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `factorModeInput`<sup>Optional</sup> <a name="factorModeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorModeInput"></a>

```typescript
public readonly factorModeInput: string;
```

- *Type:* string

---

##### `groupsExcludedInput`<sup>Optional</sup> <a name="groupsExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcludedInput"></a>

```typescript
public readonly groupsExcludedInput: string[];
```

- *Type:* string[]

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncludedInput"></a>

```typescript
public readonly groupsIncludedInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inactivityPeriodInput`<sup>Optional</sup> <a name="inactivityPeriodInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriodInput"></a>

```typescript
public readonly inactivityPeriodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnectionInput"></a>

```typescript
public readonly networkConnectionInput: string;
```

- *Type:* string

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludesInput"></a>

```typescript
public readonly networkExcludesInput: string[];
```

- *Type:* string[]

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludesInput"></a>

```typescript
public readonly networkIncludesInput: string[];
```

- *Type:* string[]

---

##### `platformIncludeInput`<sup>Optional</sup> <a name="platformIncludeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.platformIncludeInput"></a>

```typescript
public readonly platformIncludeInput: IResolvable | AppSignonPolicyRulePlatformInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `reAuthenticationFrequencyInput`<sup>Optional</sup> <a name="reAuthenticationFrequencyInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequencyInput"></a>

```typescript
public readonly reAuthenticationFrequencyInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcludedInput"></a>

```typescript
public readonly usersExcludedInput: string[];
```

- *Type:* string[]

---

##### `usersIncludedInput`<sup>Optional</sup> <a name="usersIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncludedInput"></a>

```typescript
public readonly usersIncludedInput: string[];
```

- *Type:* string[]

---

##### `userTypesExcludedInput`<sup>Optional</sup> <a name="userTypesExcludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcludedInput"></a>

```typescript
public readonly userTypesExcludedInput: string[];
```

- *Type:* string[]

---

##### `userTypesIncludedInput`<sup>Optional</sup> <a name="userTypesIncludedInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncludedInput"></a>

```typescript
public readonly userTypesIncludedInput: string[];
```

- *Type:* string[]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.constraints"></a>

```typescript
public readonly constraints: string[];
```

- *Type:* string[]

---

##### `customExpression`<sup>Required</sup> <a name="customExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.customExpression"></a>

```typescript
public readonly customExpression: string;
```

- *Type:* string

---

##### `deviceIsManaged`<sup>Required</sup> <a name="deviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsManaged"></a>

```typescript
public readonly deviceIsManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceIsRegistered`<sup>Required</sup> <a name="deviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.deviceIsRegistered"></a>

```typescript
public readonly deviceIsRegistered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `factorMode`<sup>Required</sup> <a name="factorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.factorMode"></a>

```typescript
public readonly factorMode: string;
```

- *Type:* string

---

##### `groupsExcluded`<sup>Required</sup> <a name="groupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsExcluded"></a>

```typescript
public readonly groupsExcluded: string[];
```

- *Type:* string[]

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inactivityPeriod`<sup>Required</sup> <a name="inactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.inactivityPeriod"></a>

```typescript
public readonly inactivityPeriod: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `reAuthenticationFrequency`<sup>Required</sup> <a name="reAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.reAuthenticationFrequency"></a>

```typescript
public readonly reAuthenticationFrequency: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

---

##### `usersIncluded`<sup>Required</sup> <a name="usersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.usersIncluded"></a>

```typescript
public readonly usersIncluded: string[];
```

- *Type:* string[]

---

##### `userTypesExcluded`<sup>Required</sup> <a name="userTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesExcluded"></a>

```typescript
public readonly userTypesExcluded: string[];
```

- *Type:* string[]

---

##### `userTypesIncluded`<sup>Required</sup> <a name="userTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.userTypesIncluded"></a>

```typescript
public readonly userTypesIncluded: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSignonPolicyRuleConfig <a name="AppSignonPolicyRuleConfig" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.Initializer"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

const appSignonPolicyRuleConfig: appSignonPolicyRule.AppSignonPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name">name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId">policyId</a></code> | <code>string</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access">access</a></code> | <code>string</code> | Allow or deny access based on the rule conditions: ALLOW or DENY. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints">constraints</a></code> | <code>string[]</code> | An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression">customExpression</a></code> | <code>string</code> | This is an optional advanced setting. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged">deviceIsManaged</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the device is managed. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered">deviceIsRegistered</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the device is registered. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode">factorMode</a></code> | <code>string</code> | The number of factors required to satisfy this assurance level. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded">groupsExcluded</a></code> | <code>string[]</code> | List of group IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>string[]</code> | List of group IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod">inactivityPeriod</a></code> | <code>string</code> | The inactivity duration after which the end user must re-authenticate. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection">networkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes">networkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes">networkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude">platformInclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>[]</code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency">reAuthenticationFrequency</a></code> | <code>string</code> | The duration after which the end user must re-authenticate, regardless of user activity. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status">status</a></code> | <code>string</code> | Status of the rule. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type">type</a></code> | <code>string</code> | The Verification Method type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded">usersExcluded</a></code> | <code>string[]</code> | Set of User IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded">usersIncluded</a></code> | <code>string[]</code> | Set of User IDs to include. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded">userTypesExcluded</a></code> | <code>string[]</code> | Set of User Type IDs to exclude. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded">userTypesIncluded</a></code> | <code>string[]</code> | Set of User Type IDs to include. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#name AppSignonPolicyRule#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

Allow or deny access based on the rule conditions: ALLOW or DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#access AppSignonPolicyRule#access}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.constraints"></a>

```typescript
public readonly constraints: string[];
```

- *Type:* string[]

An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}

---

##### `customExpression`<sup>Optional</sup> <a name="customExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.customExpression"></a>

```typescript
public readonly customExpression: string;
```

- *Type:* string

This is an optional advanced setting.

If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}

---

##### `deviceIsManaged`<sup>Optional</sup> <a name="deviceIsManaged" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsManaged"></a>

```typescript
public readonly deviceIsManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the device is managed.

A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}

---

##### `deviceIsRegistered`<sup>Optional</sup> <a name="deviceIsRegistered" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.deviceIsRegistered"></a>

```typescript
public readonly deviceIsRegistered: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the device is registered.

A device is registered if the User enrolls with Okta Verify that is installed on the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}

---

##### `factorMode`<sup>Optional</sup> <a name="factorMode" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.factorMode"></a>

```typescript
public readonly factorMode: string;
```

- *Type:* string

The number of factors required to satisfy this assurance level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}

---

##### `groupsExcluded`<sup>Optional</sup> <a name="groupsExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsExcluded"></a>

```typescript
public readonly groupsExcluded: string[];
```

- *Type:* string[]

List of group IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.groupsIncluded"></a>

```typescript
public readonly groupsIncluded: string[];
```

- *Type:* string[]

List of group IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#id AppSignonPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivityPeriod`<sup>Optional</sup> <a name="inactivityPeriod" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.inactivityPeriod"></a>

```typescript
public readonly inactivityPeriod: string;
```

- *Type:* string

The inactivity duration after which the end user must re-authenticate.

Use the ISO 8601 Period format for recurring time intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#inactivity_period AppSignonPolicyRule#inactivity_period}

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkConnection"></a>

```typescript
public readonly networkConnection: string;
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkExcludes"></a>

```typescript
public readonly networkExcludes: string[];
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.networkIncludes"></a>

```typescript
public readonly networkIncludes: string[];
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}

---

##### `platformInclude`<sup>Optional</sup> <a name="platformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.platformInclude"></a>

```typescript
public readonly platformInclude: IResolvable | AppSignonPolicyRulePlatformInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>[]

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#priority AppSignonPolicyRule#priority}.

---

##### `reAuthenticationFrequency`<sup>Optional</sup> <a name="reAuthenticationFrequency" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.reAuthenticationFrequency"></a>

```typescript
public readonly reAuthenticationFrequency: string;
```

- *Type:* string

The duration after which the end user must re-authenticate, regardless of user activity.

Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#status AppSignonPolicyRule#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The Verification Method type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersExcluded"></a>

```typescript
public readonly usersExcluded: string[];
```

- *Type:* string[]

Set of User IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}

---

##### `usersIncluded`<sup>Optional</sup> <a name="usersIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.usersIncluded"></a>

```typescript
public readonly usersIncluded: string[];
```

- *Type:* string[]

Set of User IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}

---

##### `userTypesExcluded`<sup>Optional</sup> <a name="userTypesExcluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesExcluded"></a>

```typescript
public readonly userTypesExcluded: string[];
```

- *Type:* string[]

Set of User Type IDs to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}

---

##### `userTypesIncluded`<sup>Optional</sup> <a name="userTypesIncluded" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRuleConfig.property.userTypesIncluded"></a>

```typescript
public readonly userTypesIncluded: string[];
```

- *Type:* string[]

Set of User Type IDs to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}

---

### AppSignonPolicyRulePlatformInclude <a name="AppSignonPolicyRulePlatformInclude" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.Initializer"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

const appSignonPolicyRulePlatformInclude: appSignonPolicyRule.AppSignonPolicyRulePlatformInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression">osExpression</a></code> | <code>string</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}. |

---

##### `osExpression`<sup>Optional</sup> <a name="osExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osExpression"></a>

```typescript
public readonly osExpression: string;
```

- *Type:* string

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#os_expression AppSignonPolicyRule#os_expression}

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/app_signon_policy_rule#type AppSignonPolicyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSignonPolicyRulePlatformIncludeList <a name="AppSignonPolicyRulePlatformIncludeList" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

new appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get"></a>

```typescript
public get(index: number): AppSignonPolicyRulePlatformIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSignonPolicyRulePlatformInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a>[]

---


### AppSignonPolicyRulePlatformIncludeOutputReference <a name="AppSignonPolicyRulePlatformIncludeOutputReference" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer"></a>

```typescript
import { appSignonPolicyRule } from '@cdktf/provider-okta'

new appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression">resetOsExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOsExpression` <a name="resetOsExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsExpression"></a>

```typescript
public resetOsExpression(): void
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetOsType"></a>

```typescript
public resetOsType(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput">osExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression">osExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osExpressionInput`<sup>Optional</sup> <a name="osExpressionInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpressionInput"></a>

```typescript
public readonly osExpressionInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `osExpression`<sup>Required</sup> <a name="osExpression" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osExpression"></a>

```typescript
public readonly osExpression: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppSignonPolicyRulePlatformInclude | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-okta.appSignonPolicyRule.AppSignonPolicyRulePlatformInclude">AppSignonPolicyRulePlatformInclude</a> | cdktf.IResolvable

---



