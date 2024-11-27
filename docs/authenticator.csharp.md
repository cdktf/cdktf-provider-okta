# `authenticator` Submodule <a name="`authenticator` Submodule" id="@cdktf/provider-okta.authenticator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Authenticator <a name="Authenticator" id="@cdktf/provider-okta.authenticator.Authenticator"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator okta_authenticator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new Authenticator(Construct Scope, string Id, AuthenticatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig">AuthenticatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig">AuthenticatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetLegacyIgnoreName">ResetLegacyIgnoreName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort">ResetProviderAuthPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost">ResetProviderHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname">ResetProviderHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey">ResetProviderIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson">ResetProviderJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey">ResetProviderSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret">ResetProviderSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate">ResetProviderUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.authenticator.Authenticator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.authenticator.Authenticator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authenticator.Authenticator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authenticator.Authenticator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.authenticator.Authenticator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.authenticator.Authenticator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.authenticator.Authenticator.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.authenticator.Authenticator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.Authenticator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authenticator.Authenticator.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.authenticator.Authenticator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.Authenticator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.authenticator.Authenticator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.authenticator.Authenticator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.authenticator.Authenticator.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.authenticator.Authenticator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.Authenticator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authenticator.Authenticator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLegacyIgnoreName` <a name="ResetLegacyIgnoreName" id="@cdktf/provider-okta.authenticator.Authenticator.resetLegacyIgnoreName"></a>

```csharp
private void ResetLegacyIgnoreName()
```

##### `ResetProviderAuthPort` <a name="ResetProviderAuthPort" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort"></a>

```csharp
private void ResetProviderAuthPort()
```

##### `ResetProviderHost` <a name="ResetProviderHost" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost"></a>

```csharp
private void ResetProviderHost()
```

##### `ResetProviderHostname` <a name="ResetProviderHostname" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname"></a>

```csharp
private void ResetProviderHostname()
```

##### `ResetProviderIntegrationKey` <a name="ResetProviderIntegrationKey" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey"></a>

```csharp
private void ResetProviderIntegrationKey()
```

##### `ResetProviderJson` <a name="ResetProviderJson" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson"></a>

```csharp
private void ResetProviderJson()
```

##### `ResetProviderSecretKey` <a name="ResetProviderSecretKey" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey"></a>

```csharp
private void ResetProviderSecretKey()
```

##### `ResetProviderSharedSecret` <a name="ResetProviderSharedSecret" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret"></a>

```csharp
private void ResetProviderSharedSecret()
```

##### `ResetProviderUserNameTemplate` <a name="ResetProviderUserNameTemplate" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate"></a>

```csharp
private void ResetProviderUserNameTemplate()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-okta.authenticator.Authenticator.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.authenticator.Authenticator.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Authenticator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Authenticator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Authenticator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Authenticator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Authenticator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Authenticator resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Authenticator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Authenticator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authenticator.Authenticator.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Authenticator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId">ProviderInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreNameInput">LegacyIgnoreNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput">ProviderAuthPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput">ProviderHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput">ProviderHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput">ProviderIntegrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput">ProviderJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput">ProviderSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput">ProviderSharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput">ProviderUserNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreName">LegacyIgnoreName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort">ProviderAuthPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHost">ProviderHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname">ProviderHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey">ProviderIntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJson">ProviderJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey">ProviderSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret">ProviderSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate">ProviderUserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authenticator.Authenticator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authenticator.Authenticator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authenticator.Authenticator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authenticator.Authenticator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authenticator.Authenticator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authenticator.Authenticator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authenticator.Authenticator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ProviderInstanceId`<sup>Required</sup> <a name="ProviderInstanceId" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId"></a>

```csharp
public string ProviderInstanceId { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.authenticator.Authenticator.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `LegacyIgnoreNameInput`<sup>Optional</sup> <a name="LegacyIgnoreNameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreNameInput"></a>

```csharp
public object LegacyIgnoreNameInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderAuthPortInput`<sup>Optional</sup> <a name="ProviderAuthPortInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput"></a>

```csharp
public double ProviderAuthPortInput { get; }
```

- *Type:* double

---

##### `ProviderHostInput`<sup>Optional</sup> <a name="ProviderHostInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput"></a>

```csharp
public string ProviderHostInput { get; }
```

- *Type:* string

---

##### `ProviderHostnameInput`<sup>Optional</sup> <a name="ProviderHostnameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput"></a>

```csharp
public string ProviderHostnameInput { get; }
```

- *Type:* string

---

##### `ProviderIntegrationKeyInput`<sup>Optional</sup> <a name="ProviderIntegrationKeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput"></a>

```csharp
public string ProviderIntegrationKeyInput { get; }
```

- *Type:* string

---

##### `ProviderJsonInput`<sup>Optional</sup> <a name="ProviderJsonInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput"></a>

```csharp
public string ProviderJsonInput { get; }
```

- *Type:* string

---

##### `ProviderSecretKeyInput`<sup>Optional</sup> <a name="ProviderSecretKeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput"></a>

```csharp
public string ProviderSecretKeyInput { get; }
```

- *Type:* string

---

##### `ProviderSharedSecretInput`<sup>Optional</sup> <a name="ProviderSharedSecretInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput"></a>

```csharp
public string ProviderSharedSecretInput { get; }
```

- *Type:* string

---

##### `ProviderUserNameTemplateInput`<sup>Optional</sup> <a name="ProviderUserNameTemplateInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput"></a>

```csharp
public string ProviderUserNameTemplateInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.Authenticator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-okta.authenticator.Authenticator.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `LegacyIgnoreName`<sup>Required</sup> <a name="LegacyIgnoreName" id="@cdktf/provider-okta.authenticator.Authenticator.property.legacyIgnoreName"></a>

```csharp
public object LegacyIgnoreName { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authenticator.Authenticator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderAuthPort`<sup>Required</sup> <a name="ProviderAuthPort" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort"></a>

```csharp
public double ProviderAuthPort { get; }
```

- *Type:* double

---

##### `ProviderHost`<sup>Required</sup> <a name="ProviderHost" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHost"></a>

```csharp
public string ProviderHost { get; }
```

- *Type:* string

---

##### `ProviderHostname`<sup>Required</sup> <a name="ProviderHostname" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname"></a>

```csharp
public string ProviderHostname { get; }
```

- *Type:* string

---

##### `ProviderIntegrationKey`<sup>Required</sup> <a name="ProviderIntegrationKey" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey"></a>

```csharp
public string ProviderIntegrationKey { get; }
```

- *Type:* string

---

##### `ProviderJson`<sup>Required</sup> <a name="ProviderJson" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJson"></a>

```csharp
public string ProviderJson { get; }
```

- *Type:* string

---

##### `ProviderSecretKey`<sup>Required</sup> <a name="ProviderSecretKey" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey"></a>

```csharp
public string ProviderSecretKey { get; }
```

- *Type:* string

---

##### `ProviderSharedSecret`<sup>Required</sup> <a name="ProviderSharedSecret" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret"></a>

```csharp
public string ProviderSharedSecret { get; }
```

- *Type:* string

---

##### `ProviderUserNameTemplate`<sup>Required</sup> <a name="ProviderUserNameTemplate" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate"></a>

```csharp
public string ProviderUserNameTemplate { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-okta.authenticator.Authenticator.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.authenticator.Authenticator.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatorConfig <a name="AuthenticatorConfig" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AuthenticatorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    string Name,
    string Id = null,
    object LegacyIgnoreName = null,
    double ProviderAuthPort = null,
    string ProviderHost = null,
    string ProviderHostname = null,
    string ProviderIntegrationKey = null,
    string ProviderJson = null,
    string ProviderSecretKey = null,
    string ProviderSharedSecret = null,
    string ProviderUserNameTemplate = null,
    string Settings = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key">Key</a></code> | <code>string</code> | A human-readable string that identifies the authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name">Name</a></code> | <code>string</code> | Display name of the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#id Authenticator#id}. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.legacyIgnoreName">LegacyIgnoreName</a></code> | <code>object</code> | Name does not trigger change detection (legacy behavior). |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort">ProviderAuthPort</a></code> | <code>double</code> | The RADIUS server port (for example 1812). |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost">ProviderHost</a></code> | <code>string</code> | (DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname">ProviderHostname</a></code> | <code>string</code> | Server host name or IP address. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey">ProviderIntegrationKey</a></code> | <code>string</code> | (DUO specific) - The Duo Security integration key.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson">ProviderJson</a></code> | <code>string</code> | Provider JSON allows for expressive providervalues. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey">ProviderSecretKey</a></code> | <code>string</code> | (DUO specific) - The Duo Security secret key.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret">ProviderSharedSecret</a></code> | <code>string</code> | An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate">ProviderUserNameTemplate</a></code> | <code>string</code> | Username template expected by the provider. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings">Settings</a></code> | <code>string</code> | Settings for the authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status">Status</a></code> | <code>string</code> | Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A human-readable string that identifies the authenticator.

Some authenticators are available by feature flag on the organization. Possible values inclue: `duo`, `external_idp`, `google_otp`, `okta_email`, `okta_password`, `okta_verify`, `onprem_mfa`, `phone_number`, `rsa_token`, `security_question`, `webauthn`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#key Authenticator#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Display name of the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#name Authenticator#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#id Authenticator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LegacyIgnoreName`<sup>Optional</sup> <a name="LegacyIgnoreName" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.legacyIgnoreName"></a>

```csharp
public object LegacyIgnoreName { get; set; }
```

- *Type:* object

Name does not trigger change detection (legacy behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#legacy_ignore_name Authenticator#legacy_ignore_name}

---

##### `ProviderAuthPort`<sup>Optional</sup> <a name="ProviderAuthPort" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort"></a>

```csharp
public double ProviderAuthPort { get; set; }
```

- *Type:* double

The RADIUS server port (for example 1812).

This is defined when the On-Prem RADIUS server is configured. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_auth_port Authenticator#provider_auth_port}

---

##### `ProviderHost`<sup>Optional</sup> <a name="ProviderHost" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost"></a>

```csharp
public string ProviderHost { get; set; }
```

- *Type:* string

(DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_host Authenticator#provider_host}

---

##### `ProviderHostname`<sup>Optional</sup> <a name="ProviderHostname" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname"></a>

```csharp
public string ProviderHostname { get; set; }
```

- *Type:* string

Server host name or IP address.

Default is `localhost`. Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_hostname Authenticator#provider_hostname}

---

##### `ProviderIntegrationKey`<sup>Optional</sup> <a name="ProviderIntegrationKey" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey"></a>

```csharp
public string ProviderIntegrationKey { get; set; }
```

- *Type:* string

(DUO specific) - The Duo Security integration key.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_integration_key Authenticator#provider_integration_key}

---

##### `ProviderJson`<sup>Optional</sup> <a name="ProviderJson" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson"></a>

```csharp
public string ProviderJson { get; set; }
```

- *Type:* string

Provider JSON allows for expressive providervalues.

This argument conflicts with the other 'provider_xxx' arguments. The [CreateProvider](https://developer.okta.com/docs/reference/api/authenticators-admin/#request) illustrates detailed provider values for a Duo authenticator. [Provider values](https://developer.okta.com/docs/reference/api/authenticators-admin/#authenticators-administration-api-object)are listed in Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_json Authenticator#provider_json}

---

##### `ProviderSecretKey`<sup>Optional</sup> <a name="ProviderSecretKey" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey"></a>

```csharp
public string ProviderSecretKey { get; set; }
```

- *Type:* string

(DUO specific) - The Duo Security secret key.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_secret_key Authenticator#provider_secret_key}

---

##### `ProviderSharedSecret`<sup>Optional</sup> <a name="ProviderSharedSecret" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret"></a>

```csharp
public string ProviderSharedSecret { get; set; }
```

- *Type:* string

An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.

Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_shared_secret Authenticator#provider_shared_secret}

---

##### `ProviderUserNameTemplate`<sup>Optional</sup> <a name="ProviderUserNameTemplate" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate"></a>

```csharp
public string ProviderUserNameTemplate { get; set; }
```

- *Type:* string

Username template expected by the provider. Used only for authenticators with type `security_key`.  Conflicts with `provider_json` argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#provider_user_name_template Authenticator#provider_user_name_template}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

Settings for the authenticator.

The settings JSON contains values based on Authenticator key. It is not used for authenticators with type `security_key`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#settings Authenticator#settings}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.12.0/docs/resources/authenticator#status Authenticator#status}

---



